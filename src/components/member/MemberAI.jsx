import  { useMemo } from "react";
import styles from "./MemberAI.module.css";

const DAYS_IN_WEEK = 7;
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const formatDateKey = (date) => {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  return `${y}-${String(m).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
};

// ISO week calculation helper
const getWeekOfYear = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
  const week1 = new Date(d.getFullYear(), 0, 4);
  return (
    1 +
    Math.round(
      ((d.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
};

const MemberAI = ({ records }) => {
  const {
    byDateMap,
    startDate,
    endDate,
    allDates,
    weeksCount,
    monthLabels,
    weekIndexMap,
  } = useMemo(() => {
    const map = {};
    records.forEach((r) => {
      const key = formatDateKey(r.date);
      map[key] = r.slot;
    });

    const now = new Date();
    const start = new Date(now);
    start.setDate(start.getDate() - 89); // last 90 days including today
    start.setHours(0, 0, 0, 0);
    const end = new Date(now);
    end.setHours(0, 0, 0, 0);

    // all dates from start to end
    const dates = [];
    const d = new Date(start);
    while (d <= end) {
      dates.push(new Date(d));
      d.setDate(d.getDate() + 1);
    }

    // Get unique weeks and map to column indices
    const weekNumbers = dates.map((date) => {
      const year = date.getFullYear();
      const week = getWeekOfYear(date);
      return { year, week };
    });
    const uniqueWeeksSet = new Set(
      weekNumbers.map(({ year, week }) => `${year}-W${week}`)
    );
    const uniqueWeeks = Array.from(uniqueWeeksSet).sort();

    const weekIndexMap = {};
    uniqueWeeks.forEach((wk, i) => {
      weekIndexMap[wk] = i + 1;
    });

    // Map month to first column index
    const monthMap = {};
    for (let i = 0; i < dates.length; i++) {
      const dt = dates[i];
      const monthKey = dt.toISOString().slice(0, 7);
      const wk = getWeekOfYear(dt);
      const wkYear = dt.getFullYear();
      const wkKey = `${wkYear}-W${wk}`;
      const col = weekIndexMap[wkKey];
      if (!(monthKey in monthMap)) {
        monthMap[monthKey] = col;
      }
    }

    return {
      byDateMap: map,
      startDate: start,
      endDate: end,
      allDates: dates,
      weeksCount: uniqueWeeks.length,
      monthLabels: monthMap,
      weekIndexMap,
    };
  }, [records]);

  // Prepare month spans for grid header
  const monthSpans = useMemo(() => {
    const entries = Object.entries(monthLabels).sort((a, b) => a[1] - b[1]);
    const spans = [];
    for (let i = 0; i < entries.length; i++) {
      const [monthKey, startCol] = entries[i];
      const next = entries[i + 1];
      const endCol = next ? next[1] : weeksCount + 1;
      spans.push({ monthKey, startCol, span: endCol - startCol });
    }
    return spans;
  }, [monthLabels, weeksCount]);

  // Build grid: rows=days, columns=weeks
  const daysGrid = useMemo(() => {
    const grid = Array.from({ length: 7 }, () =>
      Array(weeksCount).fill(null)
    );

    allDates.forEach((date) => {
      const dayIdx = date.getDay();
      const year = date.getFullYear();
      const week = getWeekOfYear(date);
      const weekKey = `${year}-W${week}`;
      const colIdx = weekIndexMap[weekKey] - 1;
      const key = formatDateKey(date);
      grid[dayIdx][colIdx] = {
        date,
        slot: byDateMap[key],
      };
    });

    return grid;
  }, [allDates, byDateMap, weekIndexMap, weeksCount]);

  return (
    <div className={styles.container}>
      {/* Month Labels */}
      <div className={styles.monthLabels}>
        <div className={styles.corner} /> {/* empty corner for day labels */}
        {monthSpans.map(({ monthKey, startCol, span }) => (
          <div
            key={monthKey}
            className={styles.monthLabel}
            style={{
              gridColumnStart: startCol + 1,
              gridColumnEnd: startCol + 1 + span,
            }}
          >
            {new Date(monthKey + "-01").toLocaleString("default", {
              month: "short",
              year: "numeric",
            })}
          </div>
        ))}
      </div>

      <div className={styles.mainGrid}>
        {/* Days column */}
        <div className={styles.daysColumn}>
          {WEEKDAYS.map((d) => (
            <div key={d} className={styles.dayLabel}>
              {d}
            </div>
          ))}
        </div>

        {/* Heatmap grid */}
        <div
          className={styles.grid}
          style={{ gridTemplateColumns: `repeat(${weeksCount}, 16px)` }}
        >
          {daysGrid.flatMap((row, dayIdx) =>
            row.map((cell, colIdx) => {
              if (!cell)
                return (
                  <div
                    key={`empty-${dayIdx}-${colIdx}`}
                    className={`${styles.dayCell} ${styles.empty}`}
                    title=""
                  />
                );

              const dateStr = cell.date.toISOString().slice(0, 10);
              const tooltip = `${dateStr} - ${cell.slot}`;
              return (
                <div
                  key={`${dayIdx}-${colIdx}`}
                  className={`${styles.dayCell} ${
                    cell.slot ? styles.filled : styles.empty
                  }`}
                  title={tooltip}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberAI;

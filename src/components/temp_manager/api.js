const BASE_URL = 'http://localhost:3000/api'; // <--- change if needed

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("token")}` // add auth if needed
    },
    ...options
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw { status: res.status, data };
  return data;
}

export const api = {
  getUsers: (params = '') => request(`/users${params}`),
  getAttendanceSummary: (date) => request(`/attendance/summary?date=${encodeURIComponent(date)}`),
  markAttendance: (body) => request('/manager/attendance/mark', { method: 'POST', body: JSON.stringify(body) }),
  getPreviousAttendance: (params = '') => request(`/attendance/previous${params}`),
  getMemberHistory: (params = '') => request(`/attendance/member/history${params}`),
  getMemberAttendance: (params = '') => request(`/attendance/member${params}`),
};
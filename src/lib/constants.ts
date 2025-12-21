// winning bingo combos (row, col, diag)
export const BINGO_LINES: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

// how we count points
export const POINTS_PER_PROBLEM = 10;
export const BINGO_BONUS_POINTS = 30;

// timers
export const SYNC_COOLDOWN_MS = 30 * 1000; // 30s between syncs
export const LEADERBOARD_REFRESH_MS = 60 * 1000; // 1min for leaderboard

// codeforces api endpoints
export const CF_API_BASE = 'https://codeforces.com/api';
export const CF_USER_STATUS_ENDPOINT = '/user.status';

// auth stuff
export const JWT_EXPIRY = '24h';

// grid settings
export const GRID_SIZE = 9;
export const GRID_COLS = 3;
export const GRID_ROWS = 3;

// mongodb team model
export interface ITeam {
    _id?: string;
    teamName: string;
    password: string;
    members: string[]; // cf handles
    lastSync: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
}

// individual problem details
export interface IProblem {
    gridIndex: number; // 0-8 position
    contestId: string; // cf contest id
    problemIndex: string; // e.g. 'A'
    name: string;
    points: number;
    url?: string;
}

// contest/round setup
export interface IGameConfig {
    _id?: string;
    roundId: number;
    name: string;
    problems: IProblem[];
    startTime?: Date;
    endTime?: Date;
    isActive: boolean;
}

// live status for a team
export interface ITeamProgress {
    _id?: string;
    teamId: string;
    gameConfigId: string;
    solvedIndices: number[];
    currentScore: number;
    bingoLines: number[][]; // completed lines
    lastSubmissionTime: Date | null;
    syncCount: number;
}

export interface LoginRequest {
    teamName: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    token?: string;
    team?: {
        id: string;
        teamName: string;
        members: string[];
    };
    error?: string;
}

export interface SyncRequest {
    teamId: string;
}

export interface SyncResponse {
    success: boolean;
    progress?: {
        solvedIndices: number[];
        currentScore: number;
        bingoLines: number[][];
    };
    error?: string;
    cooldownRemaining?: number;
}

export interface LeaderboardEntry {
    rank: number;
    teamName: string;
    score: number;
    solvedCount: number;
    bingoCount: number;
    lastSubmissionTime: Date | null;
}

export interface LeaderboardResponse {
    success: boolean;
    leaderboard?: LeaderboardEntry[];
    error?: string;
}

// cf api response types
export interface CFSubmission {
    id: number;
    contestId: number;
    problem: {
        contestId: number;
        index: string;
        name: string;
    };
    verdict: string;
    creationTimeSeconds: number;
}

export interface CFApiResponse {
    status: string;
    result?: CFSubmission[];
    comment?: string;
}

export interface JWTPayload {
    teamId: string;
    teamName: string;
    iat?: number;
    exp?: number;
}

export interface GridCellData {
    index: number;
    problem: IProblem;
    isSolved: boolean;
}

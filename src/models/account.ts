export interface User {
    id: number;
    name?: string;
    email?: string;
    phone?: string;
    nickname?: string;
    schoolType?: string;
    schoolName?: string;
    grade?: string;
    class?: string;
    gender?: string;
    birthday?: string;
    profileImage?: string;
    idCardImage?: string;
    isFollowing?: boolean;
}

export interface Friend {
    id: number;
    name: string;
    nickname: string;
    profileImage: string;
    schoolName: string;
    grade: string;
    gender: string;
    isFollowing?: boolean;
}

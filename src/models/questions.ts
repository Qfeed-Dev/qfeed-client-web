export type Qtype = "official" | "personal";

export interface Questions {
    id: number;
    owner: {
        id: number;
        name: string;
        nickname: string;
        profileImage: string;
        schoolName: string;
        grade: string;
        gender: string;
    };
    title: string;
    Qtype: string;
    backgroundImage: string;
    choiceCount: number;
    viewCount: number;
    isViewed: boolean;
    isChoiced: boolean;
    createdAt: string;
}

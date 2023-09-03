import { Friend } from "./account";

export type Qtype = "official" | "personal";

export interface Questions {
    count: number;
    data: QuestionItem[];
}

export interface QuestionItem {
    id: number;
    owner: Friend;
    title: string;
    Qtype: string;
    backgroundImage: string;
    choiceCount: number;
    viewCount: number;
    isViewed: boolean;
    isChoiced: boolean;
    createdAt: string;
}

export interface QSet {
    targetUserId: number;
    value: string;
}

export interface QSetCursor {
    id: number;
    user: Friend;
    currentQ: string;
    cursor: number;
    QsetLength: number;
    isDone: boolean;
    startAt: string;
    endAt: string;
}

export interface Question {
    Qtype: Qtype;
    title: string;
    choiceList: string[];
    backgroundImage: string;
    isBlind: boolean;
}

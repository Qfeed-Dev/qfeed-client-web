import { Friend } from "./account";

export interface Chat {
    id: number;
    owner: Friend;
    targetUser: Friend;
    title: string;
    lastMessage: string;
    ownerUnreadCount: number;
    targetUserUnreadCount: number;
    createdAt: string;
}

export interface ChatRoom {
    count: number;
    data: Chat[];
}

export interface ChatList {
    id: number;
    owner: Friend;
    message: string;
    createdAt: string;
}

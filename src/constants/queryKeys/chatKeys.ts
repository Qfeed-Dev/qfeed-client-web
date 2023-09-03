export const chatRoomKeys = {
    all: ["chatroom"] as const,
    detail: (id: number) => [...chatRoomKeys.all, id] as const
};

export const chatKeys = {
    all: ["chat"] as const,
    detail: (id: number) => [...chatKeys.all, id] as const
};

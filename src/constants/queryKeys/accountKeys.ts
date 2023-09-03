export const nicknameKeys = {
    all: ["nickname"] as const
};

export const userKeys = {
    all: ["user"] as const
};

export const usersKeys = {
    all: ["users"] as const,
    filter: (filter: string) => [...usersKeys.all, filter] as const
};

export const friendKeys = {
    all: ["friend"] as const,
    detail: (id: number) => [...friendKeys.all, id] as const
};

export const followingKeys = {
    all: ["followings"] as const
};

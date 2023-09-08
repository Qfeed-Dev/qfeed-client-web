export const photoKeys = {
    all: ["photo"] as const,
    detail: (id: number) => [...photoKeys.all, id] as const
};

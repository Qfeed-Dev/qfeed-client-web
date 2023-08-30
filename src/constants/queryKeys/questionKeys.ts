export const questionKeys = {
    all: ["question"] as const,
    detail: (id: number) => [...questionKeys.all, id] as const
};

export const questionQSetKeys = {
    all: ["q-set"] as const
};

import { Qtype } from "src/models/questions";

export const questionKeys = {
    all: ["question"] as const,
    detail: (id: number, qtype: Qtype) =>
        [...questionKeys.all, id, qtype] as const
};

export const QSetCursorKeys = {
    all: ["cursor"] as const
};

export const QSetKeys = {
    all: ["q-set"] as const,
    detail: (id: number) => [...QSetKeys.all, id] as const
};

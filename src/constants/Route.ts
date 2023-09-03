export const Route = {
    HOME: () => "/",
    QUESTION: () => "/question",
    QUESTION_FRIEND: () => "/question-friend",

    ADD_QUESTION: () => "/add-question",
    ALARM: () => "/alarm",

    CHAT: () => "/chat",
    CHATTING: (id: number) => `/chat/${id}`,
    ADD_CHATTING: () => "/add-chatting",

    CHECK: () => "/check",
    FRIEND: () => "/friend",
    MYPAGE: () => "/mypage",

    COMPLETE: "/auth/complete",
    MIDHIGH: "/auth/id-card",
    UNIVERSITY: "/auth/university"
};

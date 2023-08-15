"use client";
import BottomNavigation from "src/components/BottomNavigation";
import ChatTitle from "src/pages-edit/chat/ChatTitle";
import styled from "styled-components";
import Chatting from "src/pages-edit/chat/Chatting";

export default function Page() {
    return (
        <>
            <ChatWrapper>
                <ChatTitle />
                <ChattingWrapper>
                    {chats.map((data: any, idx: number) => {
                        return <Chatting key={idx} />;
                    })}
                </ChattingWrapper>
            </ChatWrapper>
            <BottomNavigation />
        </>
    );
}

const ChatWrapper = styled.div`
    padding: 0 16px;
`;

const ChattingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const chats = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];

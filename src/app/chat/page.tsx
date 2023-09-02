"use client";
import BottomNavigation from "src/components/BottomNavigation";
import ChatTitle from "src/pages-edit/chat/ChatTitle";
import styled from "styled-components";
import Chatting from "src/pages-edit/chat/Chatting";
import { useGetChatrooms } from "src/hooks/chatting/useGetChatrooms";
import Loading from "src/components/common/Loading";
import FriendList from "src/pages-edit/chatting/FriendsList";
import Text from "src/components/common/Text";
import Spacing from "src/components/Spacing/Spacing";
import Button from "src/components/Button/Button";
import { useState } from "react";

export default function Page() {
    const { data, isLoading } = useGetChatrooms();

    const [showFriendsList, setShowFriendsList] = useState(false);
    const toggleShowFriendsList = () => setShowFriendsList(!showFriendsList);

    // const { selectedIdx } = useAppSelector((state) => state.bottomSheet);

    // const { data, isLoading } = useGetChatroomChats(selectedIdx);

    return (
        <>
            <ChatWrapper>
                <ChatTitle />
                <Spacing size={16} />
                <ChattingWrapper>
                    {isLoading ? (
                        <Loading />
                    ) : data?.data?.length ? (
                        <>
                            {data?.data?.map((data: any, idx: number) => {
                                return <Chatting key={idx} {...data} />;
                            })}
                            <Spacing size={16} />
                            {showFriendsList ? (
                                <FriendList />
                            ) : (
                                <Button onClick={toggleShowFriendsList}>
                                    새로운 쪽지를 보내보세요!
                                </Button>
                            )}
                        </>
                    ) : (
                        <>
                            <Text>
                                아직 쪽지를 사용하지 않았어요. 날 선택한
                                친구에게 쪽지를 보내보세요!
                            </Text>
                            <FriendList />
                        </>
                    )}
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

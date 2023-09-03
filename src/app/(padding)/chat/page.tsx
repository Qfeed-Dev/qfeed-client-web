"use client";
import BottomNavigation from "src/components/BottomNavigation";
import ChatTitle from "src/pages-edit/chat/ChatTitle";
import styled from "styled-components";
import Chatting from "src/pages-edit/chat/Chatting";
import { useChatsQuery } from "src/hooks/chatting/useChatsQuery";
import Loading from "src/components/common/Loading";
import FriendList from "src/pages-edit/chatting/FriendsList";
import Text from "src/components/common/Text";
import Flex from "src/components/common/Flex";
import Spacing from "src/components/Spacing/Spacing";
import Button from "src/components/Button/Button";
import { useState } from "react";
import NavigationTop from "src/components/navigations/NavigationTop";

export default function Page() {
    const { data, isLoading } = useChatsQuery();

    const [showFriendsList, setShowFriendsList] = useState(false);
    const toggleShowFriendsList = () => setShowFriendsList(!showFriendsList);

    // const { selectedIdx } = useAppSelector((state) => state.bottomSheet);

    // const { data, isLoading } = useGetChatroomChats(selectedIdx);

    return (
        <Flex direction="column">
            <NavigationTop title="쪽지함" />
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
                        <Text typo="Subtitle1r" style={{ textAlign: "center" }}>
                            아직 쪽지를 사용하지 않았어요.
                            <br />날 선택한 친구에게 쪽지를 보내보세요!
                        </Text>
                        <FriendList />
                    </>
                )}
            </ChattingWrapper>
            <BottomNavigation />
        </Flex>
    );
}

const ChattingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

"use client";
import BottomNavigation from "src/components/BottomNavigation";
import ChatTitle from "src/pages-edit/chat/ChatTitle";
import styled from "styled-components";
import Chatting from "src/pages-edit/chat/Chatting";
import Loading from "src/components/common/Loading";
import FriendList from "src/pages-edit/chatting/FriendsList";
import Text from "src/components/common/Text";
import Flex from "src/components/common/Flex";
import Spacing from "src/components/Spacing/Spacing";

import NavigationTop from "src/components/navigations/NavigationTop";
import { useChatroomsQuery } from "src/hooks/chatting/useChatroomsQuery";

export default function Page() {
    const { data, isLoading } = useChatroomsQuery();

    console.log(data);

    return (
        <Flex direction="column">
            <NavigationTop title="쪽지함" />
            <Spacing size={16} />
            <ChattingWrapper>
                {isLoading ? (
                    <Loading />
                ) : data?.count ? (
                    <>
                        {data?.data?.map((data: any, idx: number) => {
                            return <Chatting key={idx} {...data} />;
                        })}
                        <Spacing size={16} />
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

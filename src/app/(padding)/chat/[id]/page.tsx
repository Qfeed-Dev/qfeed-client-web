"use client";

import styled from "styled-components";
import BackTitle from "src/pages-edit/chatting/BackTitle";
import ChattingBox from "src/pages-edit/chatting/ChattingBox";
import Question from "src/pages-edit/chatting/Question";
import Text from "src/components/common/Text";
import Input from "src/components/Input/Input";

import { useChatsQuery } from "src/hooks/chatting/useChatsQuery";
import Flex from "src/components/common/Flex";

export default function Page({ params }: { params: { id: number } }) {
    const {
        data: chatroomData,
        isLoading,
        refetch
    } = useChatsQuery({
        chatroomId: params.id
    });

    return isLoading ? undefined : (
        <Flex direction="column" gap={16}>
            <BackTitle {...chatroomData} />
            <Question />
            <ChattingWrapper>
                {chatroomData?.count ? (
                    [...chatroomData?.data]
                        .reverse()
                        .map((data: any, idx: number) => {
                            return <ChattingBox key={idx} {...data} />;
                        })
                ) : (
                    <Text>메세지 없음</Text>
                )}
            </ChattingWrapper>
        </Flex>
    );
}

const ChattingWrapper = styled.div`
    width: 100%;
    overflow-y: auto;
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    &::-webkit-scrollbar {
        width: 0.1rem;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: transparent;
    }
`;

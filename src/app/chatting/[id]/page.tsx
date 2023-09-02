"use client";
import BackTitle from "src/pages-edit/chatting/BackTitle";
import ChattingBox from "src/pages-edit/chatting/ChattingBox";
import Question from "src/pages-edit/chatting/Question";
import styled from "styled-components";
import { useGetChatroomChats } from "src/hooks/chatting/useGetChatroomId";
import Text from "src/components/common/Text";
import Input from "src/components/Input/Input";
import { postChatroomChats } from "src/apis/chatting";

export default function Page({ params }: { params: { id: number } }) {
    const chatroomId = params.id;
    const {
        data: chatroomData,
        isLoading,
        refetch
    } = useGetChatroomChats({
        chatroomId: params.id
    });

    const sendMessage = (value: string) => {
        postChatroomChats(chatroomId, {
            message: value
        });
        refetch(); // not working?
    };

    return isLoading ? undefined : (
        <div style={{ height: "100vh" }}>
            <BackTitle {...chatroomData} />
            <PageWrapper>
                {/* <BackTitle {...chatroomData.roomDetails} /> */}
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

                <Input
                    type="chatting-send"
                    limit={0}
                    onIconPress={sendMessage}
                />
            </PageWrapper>
        </div>
    );
}

const PageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: calc(100% - 6rem);
    padding: 0 16px;
    display: flex;
    overflow: hidden;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
`;

const ChattingWrapper = styled.div`
    overflow-y: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;

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

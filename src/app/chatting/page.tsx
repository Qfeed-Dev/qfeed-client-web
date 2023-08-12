"use client";

import { useRouter } from "next/navigation";
import Icon from "src/components/Icon";
import BackTitle from "src/components/pages/chatting/BackTitle";
import ChattingBox from "src/components/pages/chatting/ChattingBox";
import Question from "src/components/pages/chatting/Question";
import Spacing from "src/components/Spacing";
import { Route } from "src/constants/Route";
import { useAppDispatch } from "src/hooks/useReduxHooks";
import { changeVisibleType } from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import styled from "styled-components";

export default function Page() {
    const router = useRouter();
    const coin = true;

    const dispatch = useAppDispatch();
    const clickIcon = () => {
        if (coin) {
            dispatch(
                changeVisibleType({
                    type: "bottomSheet",
                    value: [1, "chattingCoin", -1]
                })
            );
        } else {
        }
    };

    return (
        <>
            <BackTitle />
            <PageWrapper>
                <Question />
                <Spacing size={10} />
                <ChattingWrapper>
                    {chattings.map((data: any, idx: number) => {
                        return (
                            <ChattingBox
                                key={idx}
                                mine={data.writer === 1}
                                title={
                                    data.writer === 1 ? undefined : data.writer
                                }
                                description={data.chat}
                            />
                        );
                    })}
                </ChattingWrapper>
            </PageWrapper>

            <IconWrapper
                onClick={() => {
                    router.push(Route.ADD_CHATTING());
                }}
            >
                <IconInner>
                    <Icon
                        icon={coin ? "CoinChat" : "AddChat"}
                        onClick={clickIcon}
                    />
                </IconInner>
            </IconWrapper>
        </>
    );
}

const PageWrapper = styled.div`
    width: 100%;
    padding: 0 16px;

    position: relative;
`;

const ChattingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const IconWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: auto;

    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 901;
`;

const IconInner = styled.div`
    width: 60px;
    height: 60px;
    padding-top: 16px;

    position: absolute;
    right: 0;
    bottom: 64px;

    border-radius: 50%;
`;

const chattings = [
    {
        writer: 1,
        chat: "내가 맞춰볼게. 너 3반이지? 우리 저번에 혹시 체육대회 때 같이 앉지 않았니?"
    },
    {
        writer: "06년생 남자",
        chat: "그거 나 아닌데, 너가 앉아있는 곳 계속 보긴 했어."
    },
    {
        writer: 1,
        chat: "그럼 이것 만 알려줘. 우리 반 보다 오른쪽에 앉았어?"
    },
    {
        writer: "06년생 남자",
        chat: "왼쪽."
    },
    {
        writer: 1,
        chat: "그럼 이것 만 알려줘. 우리 반 보다 오른쪽에 앉았어?"
    },
    {
        writer: 1,
        chat: "그럼 이것 만 알려줘. 우리 반 보다 오른쪽에 앉았어?"
    },
    {
        writer: "06년생 남자",
        chat: "왼쪽."
    },
    {
        writer: "06년생 남자",
        chat: "왼쪽."
    }
];

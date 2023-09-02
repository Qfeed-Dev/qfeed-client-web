import { useRouter } from "next/navigation";
import Text from "src/components/common/Text";
import Icon from "src/components/Icon";
import { Route } from "src/constants/Route";
import { changeVisibleType } from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import styled from "styled-components";
import { colors } from "styles/theme";

export type ChattingUser = {
    id: number;
    name: string;
    nickname: string;
    profileImage: string;
    schoolName: string;
    grade: string;
    gender: string;
};

export default function Chatting({
    id,
    owner,
    targetUser,
    title,
    lastMessage,
    ownerUnreadCount,
    targetUserUnreadCount,
    createdAt
}: {
    id: number;
    owner: ChattingUser;
    targetUser: ChattingUser;
    title: string;
    lastMessage: string;
    ownerUnreadCount: number;
    targetUserUnreadCount: number;
    createdAt: string;
}) {
    const router = useRouter();

    return (
        <ChattingWrapper onClick={() => router.push(Route.CHATTING(id))}>
            <ChattingInner>
                <ChatIcon>
                    <div style={{ margin: "auto" }}>
                        <Icon icon="Message" />
                    </div>
                </ChatIcon>
                <div style={{ margin: "auto 0" }}>
                    <Text typo="Subtitle1b" style={{ marginBottom: 4 }}>
                        {title.length
                            ? title
                            : targetUser?.name ?? "제목이 없음"}
                    </Text>
                    <Text typo="Caption1r">{lastMessage ?? "메세지 없음"}</Text>
                </div>
                <TimeWrapper>
                    <Text
                        typo="Caption2r"
                        color="light_gray2"
                        style={{ marginBottom: 8 }}
                    >
                        {new Date(createdAt)
                            .toISOString()
                            .slice(0, 10)
                            .replace(/-/g, ".")}
                    </Text>
                    {ownerUnreadCount ? (
                        <div style={{ height: 16, position: "relative" }}>
                            <Count>
                                <Text typo="Caption2r" color="light_qblack">
                                    {ownerUnreadCount}
                                </Text>
                            </Count>
                        </div>
                    ) : (
                        <></>
                    )}
                </TimeWrapper>
            </ChattingInner>
        </ChattingWrapper>
    );
}

const ChattingWrapper = styled.div`
    width: 100%;
    height: 50px;
`;

const ChattingInner = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 5fr 20fr 7fr;
    // gap: 14px 14px;
`;

const ChatIcon = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 14px;

    display: flex;
    border-radius: 50px;
    background-color: ${colors.primary_qyellow};
`;

const TimeWrapper = styled.div`
    margin: auto 0;
    text-align: end;
`;

const Count = styled.div`
    width: 16px;
    height: 16px;

    position: absolute;
    right: 0;

    text-align: center;
    border-radius: 16px;
    background-color: ${colors.primary_qyellow};
`;

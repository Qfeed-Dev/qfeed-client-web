import Text from "src/components/common/Text";
import styled from "styled-components";
import { KeyOfColor, colors } from "styles/theme";
import { ChattingUser } from "../chat/Chatting";
import { useUserQuery } from "src/hooks/account/useUserQuery";
import Loading from "src/components/common/Loading";

interface PropType {
    owner: ChattingUser;
    message: string;
    createdAt: string;
}

export default function ChattingBox({ owner, message, createdAt }: PropType) {
    const { user, isLoading } = useUserQuery();
    const mine = owner.id === user?.id;

    return isLoading ? (
        <Loading />
    ) : (
        <BoxWrapper color={mine ? "light_gray2" : "primary_qyellow"}>
            <Text
                typo="Subtitle2b"
                color="light_qblack"
                style={{ marginBottom: 6 }}
            >
                {owner.name}
            </Text>
            <Text
                typo="Caption2r"
                color={mine ? "light_qwhite" : "light_qblack"}
                style={{ marginBottom: 10 }}
            >
                {message}
            </Text>
            <Text typo="Caption2r" color={mine ? "light_gray1" : "light_gray2"}>
                {new Date(createdAt)
                    .toLocaleString("en-US", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: false
                    })
                    .replace(/-/g, ".")}
            </Text>
        </BoxWrapper>
    );
}

const BoxWrapper = styled.div<{ color: KeyOfColor }>`
    width: 100%;
    padding: 16px;

    border-radius: 10px;
    background-color: ${({ color }) => color && colors[color]};
`;

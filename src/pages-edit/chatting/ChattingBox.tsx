import Text from "src/components/common/Text";
import styled from "styled-components";
import { KeyOfColor, colors } from "styles/theme";

interface PropType {
    mine: boolean;
    title: string;
    description: string;
}

export default function ChattingBox({ mine, title, description }: PropType) {
    return (
        <BoxWrapper color={mine ? "light_gray2" : "primary_qyellow"}>
            {title ? (
                <Text
                    typo="Subtitle2b"
                    color="light_qblack"
                    style={{ marginBottom: 6 }}
                >
                    06년생
                </Text>
            ) : null}
            <Text
                typo="Caption2r"
                color={mine ? "light_qwhite" : "light_qblack"}
                style={{ marginBottom: 10 }}
            >
                {description}
            </Text>
            <Text typo="Caption2r" color={mine ? "light_gray1" : "light_gray2"}>
                23/03/22 12:06
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

"use client";
import { Text } from "src/components/common/Text";
import Icon from "src/components/Icon";
import styled from "styled-components";
import { colors } from "styles/theme";
interface Props {}

const ChattingCoinDatas = [
    "200 코인",
    "1,000 코인",
    "4,000 코인",
    "10,000 코인"
];

const ChattingCoin = ({}: Props) => {
    return (
        <ChattingCoinWrapper>
            <ChattingCoinTitle>
                <Text typo="Subtitle2b" color="light_qwhite">
                    쪽지
                </Text>
                <ButtonWrapper>
                    <Button>
                        <Icon icon="HeartArrow" />
                        <Text
                            typo="Subtitle1b"
                            color="light_qblack"
                            style={{ marginLeft: 8 }}
                        >
                            1500
                        </Text>
                    </Button>
                </ButtonWrapper>
            </ChattingCoinTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {ChattingCoinDatas.map((data: string, idx: number) => {
                    return (
                        <ChattingCoinSelection
                            key={idx}
                            backgroundColor="primary_qred"
                        >
                            <Text typo="Subtitle2b">{data}</Text>
                        </ChattingCoinSelection>
                    );
                })}
            </div>
        </ChattingCoinWrapper>
    );
};

const ChattingCoinWrapper = styled.div`
    width: 100%;
`;

const ChattingCoinTitle = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

const ChattingCoinSelection = styled.div<{ backgroundColor: any }>`
    width: 100%;
    height: 52px;
    padding: 0 16px;

    display: flex;
    align-items: center;

    border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

const ButtonWrapper = styled.div`
    height: 31px;
    display: flex;

    border-radius: 10px;
    background-color: ${colors.light_qwhite};
`;

const Button = styled.div`
    margin: auto;
    padding: 0 8px;
    display: flex;
`;

export default ChattingCoin;

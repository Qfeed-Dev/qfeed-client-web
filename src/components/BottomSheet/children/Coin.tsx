"use client";
import { Text } from "src/components/common/Text";
import styled from "styled-components";
import { repeatCoinColor } from "styles/theme";

interface Props {}

const CoinDatas = ["200 코인", "1,000 코인", "4,000 코인", "10,000 코인"];

const Coin = ({}: Props) => {
    return (
        <CoinWrapper>
            <CoinTitle>
                <Text typo="Headline1b" color="light_qwhite">
                    코인 충전
                </Text>
            </CoinTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {CoinDatas.map((data: string, idx: number) => {
                    return (
                        <CoinSelection
                            key={idx}
                            backgroundColor={repeatCoinColor[idx % 4]}
                        >
                            <Text typo="Subtitle2b">{data}</Text>
                        </CoinSelection>
                    );
                })}
            </div>
        </CoinWrapper>
    );
};

const CoinWrapper = styled.div`
    width: 100%;
`;

const CoinTitle = styled.div`
    width: 100%;
    margin: 8px 0 16px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CoinSelection = styled.div<{ backgroundColor: any }>`
    width: calc(100% - 32px);
    height: 52px;
    padding: 0 16px;

    display: flex;
    align-items: center;

    border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Coin;

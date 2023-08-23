"use client";
import { Text } from "src/components/common/Text";
import Icon from "src/components/Icon";
import styled from "styled-components";
import { colors, repeatCoinColor } from "styles/theme";

interface Props {}

const CoinDatas = [
    { heart: "200 하트", money: "800원", best: false },
    { heart: "1,000 하트", money: "2,600원", best: true },
    { heart: "4,000 하트", money: "9,600원", best: false },
    { heart: "10,000 하트", money: "20,000원", best: true }
];

const Coin = ({}: Props) => {
    return (
        <CoinWrapper>
            <CoinTitle>
                <Text typo="Headline1b" color="light_qwhite">
                    하트 충전
                </Text>
            </CoinTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {CoinDatas.map((data: any, idx: number) => {
                    return (
                        <CoinSelection
                            key={idx}
                            backgroundColor={repeatCoinColor[idx % 4]}
                        >
                            <div style={{ display: "flex" }}>
                                <Icon
                                    icon="Money"
                                    fill="light_qblack"
                                    color="light_qblack"
                                />
                                <Text
                                    typo="Subtitle2b"
                                    style={{ marginLeft: 8 }}
                                >
                                    {data.heart}
                                </Text>
                                {data.best ? (
                                    <BestBox>
                                        <Text
                                            typo="Caption2r"
                                            color="light_qblack"
                                        >
                                            Best
                                        </Text>
                                    </BestBox>
                                ) : null}
                            </div>
                            <Text typo="Subtitle2b">{data.money}</Text>
                        </CoinSelection>
                    );
                })}
            </div>
        </CoinWrapper>
    );
};

const BestBox = styled.span`
    height: 19px;
    margin: auto 0;
    margin-left: 8px;
    padding: 0 6px;

    align-items: center;

    display: flex;
    border-radius: 12px;
    background-color: ${colors.light_qwhite};
`;

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
    width: 100%;
    height: 52px;
    padding: 0 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Coin;

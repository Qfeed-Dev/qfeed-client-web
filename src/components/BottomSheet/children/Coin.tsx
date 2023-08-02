"use client";
import styled from "styled-components";

interface Props {}

const CoinDatas = ["200 코인", "1,000 코인", "4,000 코인", "10,000 코인"];

const Coin = ({}: Props) => {
    return (
        <CoinWrapper>
            <CoinTitle>
                <Menu>코인 충전</Menu>
            </CoinTitle>
            {CoinDatas.map((data: string, idx: number) => {
                return <CoinSelection key={idx}>{data}</CoinSelection>;
            })}
        </CoinWrapper>
    );
};

const CoinWrapper = styled.div`
    width: 100%;
`;

const CoinTitle = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

const CoinSelection = styled.div`
    width: 100%;
    height: 52px;
    display: flex;
`;

const Menu = styled.div`
    margin: auto;
    display: flex;
`;

export default Coin;

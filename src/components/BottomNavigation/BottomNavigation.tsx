"use client";
import { useRouter } from "next/navigation";
import { colors } from "styles/theme";
import { Route } from "src/constants/Route";
import styled from "styled-components";

interface Props {}

const BottomNavigation = ({}: Props) => {
    const router = useRouter();

    return (
        <BottomNavigationWrapper>
            <BottomNavigationInner>
                <div
                    onClick={() => {
                        router.push(Route.HOME());
                    }}
                >
                    Hi
                </div>
                <div
                    onClick={() => {
                        router.push(Route.CHAT());
                    }}
                >
                    Hi
                </div>
                <div
                    onClick={() => {
                        router.push(Route.MYPAGE());
                    }}
                >
                    Hi
                </div>
                <div
                    onClick={() => {
                        router.push(Route.FRIEND());
                    }}
                >
                    Hi
                </div>
            </BottomNavigationInner>
        </BottomNavigationWrapper>
    );
};

const BottomNavigationWrapper = styled.div`
    width: 100%;
    height: 68px;

    position: fixed;
    bottom: 0;
    background-color: ${colors.light_qblack};
    z-index: 900;
`;

const BottomNavigationInner = styled.div`
    height: 100%;
    padding: 0 48px;

    color: ${colors.light_qwhite};
    display: flex;
    justify-content: space-between;

    border-top: 1px solid ${colors.light_qwhite};
`;

export default BottomNavigation;

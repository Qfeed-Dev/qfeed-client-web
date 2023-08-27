"use client";
import { useRouter, usePathname } from "next/navigation";
import { colors } from "styles/theme";
import { Route } from "src/constants/Route";
import styled from "styled-components";
import Icon from "../Icon";

interface Props {}

const BottomNavigation = ({}: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <BottomNavigationWrapper>
            <BottomNavigationInner>
                <Icon
                    icon="BHome"
                    onClick={() => {
                        router.push(Route.HOME());
                    }}
                    selected={pathname === "/"}
                />
                <Icon
                    icon="BChat"
                    onClick={() => {
                        router.push(Route.CHAT());
                    }}
                    selected={Boolean(pathname.match("/((chat).*)"))}
                />
                <Icon
                    icon="BSearch"
                    onClick={() => {
                        router.push(Route.FRIEND());
                    }}
                    selected={Boolean(pathname.match("/((friend).*)"))}
                />
                <Icon
                    icon="BMypage"
                    onClick={() => {
                        router.push(Route.MYPAGE());
                    }}
                    selected={Boolean(pathname.match("/((mypage).*)"))}
                />
            </BottomNavigationInner>
        </BottomNavigationWrapper>
    );
};

const BottomNavigationWrapper = styled.div`
    width: 100%;
    max-width: 600px;
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

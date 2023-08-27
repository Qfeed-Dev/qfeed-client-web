"use client";
import { useRouter } from "next/navigation";

import styled from "styled-components";
import Flex from "../common/Flex";
import Text from "../common/Text";
import Icon from "../Icon/Icon";
import { colors } from "styles/theme";

export interface NavProps {
    title?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const NavigationTopBack = ({ title, leftIcon, rightIcon }: NavProps) => {
    const router = useRouter();

    return (
        <NavWrapper justify="space-between">
            <Flex width="auto" gap={8}>
                <Icon icon="LeftArrow" onClick={() => router.back()} />
                {title && <Text typo="Headline1b">{title}</Text>}
            </Flex>
            {rightIcon}
        </NavWrapper>
    );
};

const NavWrapper = styled(Flex)`
    height: 50px;
    padding: 0.62rem 1rem;
    background: ${colors.light_qblack};

    position: fixed;
    top: 0;
    z-index: 999999;
`;

export default NavigationTopBack;

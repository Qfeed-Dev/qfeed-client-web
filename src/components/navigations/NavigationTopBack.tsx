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
    transparent?: boolean;
}

const NavigationTopBack = ({
    title,
    leftIcon,
    rightIcon,
    transparent = false
}: NavProps) => {
    const router = useRouter();

    return (
        <NavWrapper justify="space-between" $transparent={transparent}>
            <Flex width="auto" gap={8}>
                <Icon icon="LeftArrow" onClick={() => router.back()} />
                {leftIcon}
                {title && <Text typo="Headline1b">{title}</Text>}
            </Flex>
            {rightIcon}
        </NavWrapper>
    );
};

const NavWrapper = styled(Flex)<{ $transparent: boolean }>`
    height: 56px;
    padding: 1rem 1rem;
    background: ${({ $transparent }) =>
        $transparent ? "transparent" : colors.light_qblack};

    position: fixed;
    top: 0;
    z-index: 997;
`;

export default NavigationTopBack;

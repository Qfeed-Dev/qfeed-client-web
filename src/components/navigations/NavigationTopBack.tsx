"use client";
import styled from "styled-components";
import Flex from "../common/Flex";
import Text from "../common/Text";
import { colors } from "styles/theme";

import { useRouter } from "next/navigation";

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
                <div onClick={() => router.back()}>이전</div>
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

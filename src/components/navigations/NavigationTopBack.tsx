"use client";
import styled from "styled-components";
import Flex from "../common/Flex";
import Text from "../common/Text";

export interface NavProps {
    title?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const NavigationTopBack = ({ title, leftIcon, rightIcon }: NavProps) => {
    return (
        <NavWrapper justify="space-between">
            <Flex width="auto" gap={8}>
                <div>이전</div>
                {title && <Text typo="Headline1b">{title}</Text>}
            </Flex>
            {rightIcon}
        </NavWrapper>
    );
};

const NavWrapper = styled(Flex)`
    padding: 0.62rem 0;
`;

export default NavigationTopBack;

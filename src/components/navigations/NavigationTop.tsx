"use client";
import styled from "styled-components";
import Flex from "../common/Flex";
import Text from "../common/Text";

export interface NavProps {
    title: string;
    rightIcon?: React.ReactNode;
}

const NavigationTop = ({ title, rightIcon }: NavProps) => {
    return (
        <NavWrapper justify="space-between">
            <Text typo="Headline1b">{title}</Text>
            {rightIcon}
        </NavWrapper>
    );
};

const NavWrapper = styled(Flex)`
    padding: 0.62rem 0;
`;

export default NavigationTop;

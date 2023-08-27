"use client";
import styled from "styled-components";
import Flex from "../common/Flex";
import Text from "../common/Text";
import { colors } from "styles/theme";

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
    height: 56px;
    padding: 1rem 1rem;
    background: ${colors.light_qblack};

    position: fixed;
    top: 0;
    z-index: 999999;
`;

export default NavigationTop;

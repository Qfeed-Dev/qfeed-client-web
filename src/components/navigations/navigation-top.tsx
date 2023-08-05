"use client";
import styled from "styled-components";
import Text from "../common/Text";

export interface NavProps {
    title: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const NavigationTop = ({ title, leftIcon, rightIcon }: NavProps) => {
    return (
        <NavWrapper>
            {leftIcon}
            <Text typo="Headline1b">{title}</Text>
            {rightIcon}
        </NavWrapper>
    );
};

const NavWrapper = styled.div`
    width: 100%;
    padding: 0.62rem 0;

    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export default NavigationTop;

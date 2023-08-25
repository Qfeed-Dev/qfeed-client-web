"use client";
import styled from "styled-components";

export default function PaddingLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <PaddingWrapper>{children}</PaddingWrapper>;
}

const PaddingWrapper = styled.div`
    width: 100%;
    height: 100%;

    padding: 50px 1rem 0;
`;

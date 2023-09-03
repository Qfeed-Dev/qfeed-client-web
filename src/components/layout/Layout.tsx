"use client";
import styled from "styled-components";
import { colors, media } from "styles/theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const preventZoom = (event: any) => {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    };

    return (
        <LayoutWrapper onTouchMove={preventZoom}>
            <LayoutContent>{children}</LayoutContent>
        </LayoutWrapper>
    );
};

const LayoutWrapper = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background: ${colors.light_qblack};
    color: ${colors.light_qwhite};

    display: flex;
    justify-content: center;
`;

const LayoutContent = styled.div`
    width: 600px;
    height: 100%;
    padding: 0;

    ${media.mobile} {
        width: 100vw;
        max-width: 600px;
    }
`;

export default Layout;

import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { colors } from "styles/theme";

const Backdrop = ({
    children,
    onClick
}: {
    children: React.ReactNode;
    onClick: any;
}) => {
    return (
        <BackdropWrapper
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </BackdropWrapper>
    );
};

const BackdropWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${colors.line_black_50};

    z-index: 9999999;
`;

export default Backdrop;

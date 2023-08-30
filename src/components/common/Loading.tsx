import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { colors } from "styles/theme";

import {
    loadingContainerVariants,
    loadingCircleVariants,
    loadingCircleTransition
} from "src/constants/animation";

const Loading = () => {
    return (
        <DotWrapper
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
        >
            <Dot
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
            <Dot
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
            <Dot
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
        </DotWrapper>
    );
};

const DotWrapper = styled(motion.div)`
    width: 100vw;
    max-width: 600px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
`;

const Dot = styled(motion.span)`
    width: 0.5rem;
    height: 0.5rem;

    border-radius: 50%;

    background: ${colors.primary_qgreen};
`;

export default Loading;

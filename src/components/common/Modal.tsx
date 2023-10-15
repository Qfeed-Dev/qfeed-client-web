import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

import Flex from "./Flex";
import Text from "./Text";
import Backdrop from "./Backdrop";

import { colors } from "styles/theme";
import { modal } from "src/constants/animation";

interface ModalProps {
    title?: string;
    detail?: string;
    rightText: string;
    rightClick: any;
    handleClose: any;
}

const Modal = ({
    title,
    detail,
    rightText,
    rightClick,
    handleClose
}: ModalProps) => {
    return (
        <Backdrop onClick={handleClose}>
            <ModalWrapper
                onClick={(e) => e.stopPropagation()}
                variants={modal}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <ModalContent height="100%" direction="column" gap={4}>
                    <Text typo="Headline2b" color="light_qblack">
                        {title}
                    </Text>
                    <DetailText typo="Caption1r" color="light_qblack">
                        {detail?.split("\\n").map((line: string) => (
                            <>
                                {line}
                                <br />
                            </>
                        ))}
                    </DetailText>
                </ModalContent>
                <Flex>
                    <Btn onClick={handleClose}>
                        <Text typo="Subtitle2b" color="light_qblack">
                            취소
                        </Text>
                    </Btn>
                    <Line />
                    <Btn onClick={rightClick}>
                        <Text typo="Subtitle2b" color="light_qblack">
                            {rightText}
                        </Text>
                    </Btn>
                </Flex>
            </ModalWrapper>
        </Backdrop>
    );
};

const ModalWrapper = styled(motion.div)`
    width: 70%;
    display: flex;
    flex-direction: column;

    border-radius: 10px;
    background: ${colors.light_qwhite};
`;

const ModalContent = styled(Flex)`
    padding: 2rem 0;
`;

const DetailText = styled(Text)`
    width: 70%;
    text-align: center;
    white-space: pre-wrap;
`;

const Line = styled.div`
    width: 1px;
    height: 57px;
    border: 0.5px solid ${colors.line_black_30};
`;

const Btn = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;

    border-top: 1px solid ${colors.line_black_30};
    text-align: center;
`;

export default Modal;

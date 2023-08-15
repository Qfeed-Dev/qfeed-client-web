import styled from "styled-components";
import Flex from "./Flex";
import Text from "./Text";
import { colors } from "styles/theme";

interface ModalProps {
    title?: string;
    detail?: string;
    leftText: string;
    rightText: string;
}

const Modal = ({ title, detail, leftText, rightText }: ModalProps) => {
    return (
        <ModalWrapper width={328} height={176} direction="column">
            <Flex height="100%" direction="column" gap={4}>
                <Text typo="Headline1b" color="light_qblack">
                    {title}
                </Text>
                <Text typo="Subtitle1r" color="light_qblack">
                    {detail}
                </Text>
            </Flex>
            <Flex>
                <Btn typo="Subtitle2b" color="light_qblack">
                    {leftText}
                </Btn>
                <Line />
                <Btn typo="Subtitle2b" color="light_qblack">
                    {rightText}
                </Btn>
            </Flex>
        </ModalWrapper>
    );
};

const ModalWrapper = styled(Flex)`
    border-radius: 10px;

    background: ${colors.light_qwhite};
`;

const Line = styled.div`
    width: 1px;
    height: 100%;
    border: 0.5px solid ${colors.line_black_30};
`;

const Btn = styled(Text)`
    width: 100%;
    height: 100%;
    padding: 18px;

    border-top: 1px solid ${colors.line_black_30};
    text-align: center;
`;

export default Modal;

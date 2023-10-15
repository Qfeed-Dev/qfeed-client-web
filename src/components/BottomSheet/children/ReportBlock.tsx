"use client";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import styled from "styled-components";
import { colors } from "styles/theme";

const ReportBlock = () => {
    return (
        <Flex height="100%" direction="column">
            <Menu border>
                <Text typo="Subtitle2r">차단하기</Text>
            </Menu>
            <Menu>
                <Text typo="Subtitle2r" color="primary_qred">
                    신고하기
                </Text>
            </Menu>
        </Flex>
    );
};

const Menu = styled.div<{ border?: boolean }>`
    width: 100%;
    padding: 1rem 0;

    display: flex;
    justify-content: center;

    border-bottom: ${({ border }) =>
        border && `1px solid ${colors.line_black_5}`};
`;

export default ReportBlock;

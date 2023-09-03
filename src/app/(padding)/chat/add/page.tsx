"use client";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import Textarea from "src/components/Textarea/Textarea";
import styled from "styled-components";
import { colors } from "styles/theme";

export default function Page() {
    return (
        <Flex direction="column">
            <NavigationTopBack
                title="쪽지 보내기"
                rightIcon={
                    <UploadButton>
                        <Text typo="Subtitle1b" color="light_qblack">
                            올리기
                        </Text>
                    </UploadButton>
                }
            />
            <Textarea type="add-chatting" placeholder="내용을 입력하세요." />
        </Flex>
    );
}

const UploadButton = styled.div`
    width: 65px;
    height: 31px;

    padding: 5px 14px;

    align-items: center;

    border-radius: 10px;
    background-color: ${colors.light_qwhite};
`;

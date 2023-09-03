"use client";
import Text from "src/components/common/Text";
import Textarea from "src/components/Textarea/Textarea";
import BackTitle from "src/components/Title/BackTitle";
import styled from "styled-components";
import { colors } from "styles/theme";

export default function Page() {
    return (
        <>
            <BackTitle type="default" text="쪽지 보내기" />
            <UploadButton>
                <Text
                    typo="Subtitle1b"
                    color="light_qblack"
                    style={{
                        marginTop: 5,
                        textAlign: "center"
                    }}
                >
                    올리기
                </Text>
            </UploadButton>
            <Textarea type="add-chatting" placeholder="내용을 입력하세요." />
        </>
    );
}

const UploadButton = styled.div`
    width: 65px;
    height: 31px;

    position: absolute;
    top: 8px;
    right: 16px;
    align-items: center;

    border-radius: 10px;
    background-color: ${colors.light_qwhite};
`;

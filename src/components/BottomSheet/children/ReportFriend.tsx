"use client";
import { Text } from "src/components/common/Text";
import Hr from "src/components/Hr";
import Spacing from "src/components/Spacing";
import styled from "styled-components";

interface Props {}

const ReportDatas = [
    "이 질문은 보고싶지 않아요",
    "불쾌한 질문이에요",
    "이미 답변한 질문이에요",
    "그냥 싫어요"
];

const ReportFriend = ({}: Props) => {
    return (
        <ReportWrapper>
            <Spacing size={32} />
            <MenuWrapper>
                <Text typo="Subtitle2b" color="light_qblack">
                    신고하기
                </Text>
            </MenuWrapper>
            <Spacing size={32} />

            <MenuWrapper>
                {ReportDatas.map((data: string, idx: number) => {
                    return (
                        <div
                            key={idx}
                            style={{ width: "100%", textAlign: "center" }}
                        >
                            <Text
                                key={idx}
                                typo="Subtitle1r"
                                color="light_qblack"
                            >
                                {data}
                                <Spacing size={16} />
                            </Text>
                            {idx !== ReportDatas.length - 1 && <Hr />}
                        </div>
                    );
                })}
            </MenuWrapper>
        </ReportWrapper>
    );
};

const ReportWrapper = styled.div`
    width: 100%;
    align-items: center;
`;

const MenuWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export default ReportFriend;

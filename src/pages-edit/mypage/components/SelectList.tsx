"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";
import useGetUserQQuery from "src/hooks/questions/useGetUserQQuery";

import { colors } from "styles/theme";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";

import { Questions } from "src/models/questions";

export default function SelectList({ id }: { id: number }) {
    const router = useRouter();
    const { questions, isLoading } = useGetUserQQuery(id, "official");

    return isLoading ? (
        <div>로딩중...</div>
    ) : (
        <SelectWrapper direction="column" gap={16}>
            {questions.data.length ? (
                questions.data.map((question: Questions) => (
                    <SelectItem
                        key={question.id}
                        direction="column"
                        align="start"
                        gap={8}
                        onClick={() => {
                            router.push(`/mypage/select/${question.id}`);
                        }}
                    >
                        <Text typo="Subtitle2b">{question.title}</Text>
                        <Flex justify="space-between" gap={16}>
                            <Text typo="Caption1b" color="line_white_70">
                                {question.choiceCount}명이 나를 선택
                            </Text>
                            <Text typo="Caption2r" color="light_gray2">
                                {question.createdAt
                                    .split("T")[0]
                                    .replaceAll("-", "/")
                                    .slice(2)}
                            </Text>
                        </Flex>
                    </SelectItem>
                ))
            ) : (
                <Text typo="Subtitle1r" style={{ textAlign: "center" }}>
                    아직 만든 큐피드가 없어요
                </Text>
            )}
        </SelectWrapper>
    );
}

const SelectWrapper = styled(Flex)``;

const SelectItem = styled(Flex)`
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.line_white_30};
`;

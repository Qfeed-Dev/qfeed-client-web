"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";
import useGetUserQQuery from "src/hooks/questions/useGetUserQQuery";

import { colors } from "styles/theme";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import Loading from "src/components/common/Loading";

import { QuestionItem } from "src/models/questions";
import { motion } from "framer-motion";
import { enterComponentVariants } from "src/constants/animation";

export default function SelectList({ id }: { id: number }) {
    const router = useRouter();
    const { data, isFetched } = useGetUserQQuery(id, "official");

    return !isFetched ? (
        <Loading />
    ) : (
        <SelectWrapper
            variants={enterComponentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {data?.pages[0].data.length ? (
                data.pages.map((questions: any, idx: number) => (
                    <Flex key={idx} direction="column" gap={16}>
                        {questions.data.map((question: QuestionItem) => (
                            <SelectItem
                                key={question.id}
                                direction="column"
                                align="start"
                                gap={8}
                                onClick={() => {
                                    router.push(
                                        `/question/select/${question.id}`
                                    );
                                }}
                            >
                                <Text typo="Subtitle2b">{question.title}</Text>
                                <Flex justify="space-between" gap={16}>
                                    <Text
                                        typo="Caption1b"
                                        color="line_white_70"
                                    >
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
                        ))}
                    </Flex>
                ))
            ) : (
                <Text typo="Subtitle1r" style={{ textAlign: "center" }}>
                    아직 만든 큐피드가 없어요
                </Text>
            )}
        </SelectWrapper>
    );
}

const SelectWrapper = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SelectItem = styled(Flex)`
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.line_white_30};
`;

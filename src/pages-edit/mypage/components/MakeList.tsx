"use client";

import styled from "styled-components";

import useGetUsersQQuery from "src/hooks/questions/useGetUserQQuery";

import Text from "src/components/common/Text";

import Loading from "src/components/common/Loading";
import QuestionGrid from "src/components/GridWrapper";

export default function MakeList({ id }: { id: number }) {
    const { questions, isLoading } = useGetUsersQQuery(id, "personal");

    return isLoading ? (
        <Loading />
    ) : (
        <GridWrapper>
            {questions.data.length ? (
                <QuestionGrid questions={questions} detail={true} />
            ) : (
                <Text typo="Subtitle1r" style={{ textAlign: "center" }}>
                    아직 만든 큐피드가 없어요
                </Text>
            )}
        </GridWrapper>
    );
}

const GridWrapper = styled.div`
    width: 100%;
    height: 100% + 20px;
    margin: 0 auto;

    position: relative;
`;

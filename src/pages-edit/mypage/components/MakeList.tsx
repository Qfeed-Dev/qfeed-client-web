"use client";

import styled from "styled-components";

import useGetUsersQQuery from "src/hooks/questions/useGetUserQQuery";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Text from "src/components/common/Text";
import Flex from "src/components/common/Flex";

import Loading from "src/components/common/Loading";
import QuestionGrid from "src/components/GridWrapper";

export default function MakeList({ id }: { id: number }) {
    const { data, fetchNextPage, hasNextPage, isFetched } = useGetUsersQQuery(
        id,
        "personal"
    );
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView]);

    return !isFetched ? (
        <Loading />
    ) : (
        <GridWrapper>
            {data?.pages[0].data.length ? (
                <>
                    <Flex gap={12} align="start">
                        <Flex direction="column" gap={12} align="start">
                            {isFetched &&
                                data?.pages.map((question, idx) => (
                                    <QuestionGrid
                                        key={idx}
                                        questions={question.data.filter(
                                            (data: any, idx: number) =>
                                                idx % 2 === 0
                                        )}
                                        colorStart={1}
                                        detail
                                    />
                                ))}
                        </Flex>
                        <Flex direction="column" gap={12} align="start">
                            {isFetched &&
                                data?.pages.map((question, idx) => (
                                    <QuestionGrid
                                        key={idx}
                                        questions={question.data.filter(
                                            (data: any, idx: number) =>
                                                idx % 2 === 1
                                        )}
                                        colorStart={3}
                                        detail
                                    />
                                ))}
                        </Flex>
                    </Flex>
                    <div ref={ref} style={{ height: "5px" }}></div>
                </>
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

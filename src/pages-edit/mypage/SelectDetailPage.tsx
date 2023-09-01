"use client";

import styled from "styled-components";

import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { colors } from "styles/theme";

import { useGetQuestionsId } from "src/hooks/home/useGetQuestionId";
import { useAppDispatch } from "src/hooks/useReduxHooks";
import { changeVisibleType } from "src/reducer/slices/bottomSheet/bottomSheetSlice";

import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import Icon from "src/components/Icon/Icon";
import Loading from "src/components/common/Loading";
import { getAppStateColor } from "src/utils/colorGenerate";

const SelectDetailPage = ({ params }: { params: { id: number } }) => {
    const { data, isLoading, error, refetch } = useGetQuestionsId({
        questionId: params.id
    });

    const dispatch = useAppDispatch();
    const handleClickShowHint = () => {
        dispatch(
            changeVisibleType({
                type: "bottomSheet",
                value: [1, "hint", -1]
            })
        );
    };
    return (
        <SelectQWrapper direction="column" gap={144}>
            <NavigationTopBack
                rightIcon={
                    <Flex width="auto" gap={16}>
                        <Icon icon="Share" />
                        <Icon icon="Trash" />
                    </Flex>
                }
            />
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Title typo="Headline1b">{data.title}</Title>
                    <Flex direction="column" gap={8}>
                        {data.choices.map((choice: any) => (
                            <HintWrapper key={choice.user.id}>
                                <HintItem idx={choice.user.id}>
                                    <Person
                                        typo="Subtitle2b"
                                        color="light_qblack"
                                    >
                                        {choice.user.grade +
                                            " " +
                                            choice.user.gender +
                                            "자"}
                                    </Person>
                                    <Message width={73}>
                                        <Icon icon="Chat" />
                                    </Message>
                                    <Hint
                                        width={73}
                                        onClick={handleClickShowHint}
                                    >
                                        <Icon
                                            icon="Heart"
                                            fill="light_qblack"
                                        />
                                    </Hint>
                                </HintItem>
                                <HintText typo="Subtitle1r" color="light_gray3">
                                    안녕하세요 테스트입니다
                                </HintText>
                            </HintWrapper>
                        ))}
                    </Flex>
                </>
            )}
        </SelectQWrapper>
    );
};

const SelectQWrapper = styled(Flex)`
    padding: 56px 1rem 80px;
`;

const Title = styled(Text)`
    width: 185px;
    padding-top: 88px;
    word-break: keep-all;
    text-align: center;
`;

const HintWrapper = styled.div`
    width: 100%;
    height: 87px;
`;

const HintItem = styled(Flex)<{ idx: number }>`
    height: 50px;
    background: ${({ idx }) => colors[getAppStateColor(idx)]};

    border-radius: 10px;
    overflow: hidden;

    position: relative;
    z-index: 1;
`;

const Person = styled(Text)`
    width: 100%;
    padding: 0 20px;
`;

const Message = styled(Flex)`
    min-width: 73px;
    height: 100%;

    background: ${colors.light_qblack};
`;

const Hint = styled(Flex)`
    min-width: 73px;
    height: 100%;
    padding: 0 20px;
    background: ${colors.light_qwhite};
    white-space: nowrap;
`;

const HintText = styled(Text)`
    width: 100%;
    height: 47px;

    padding: 0.5rem 1rem;

    background: ${colors.line_white_50};
    border-radius: 0 0 10px 10px;

    position: relative;
    top: -10px;

    display: flex;
    align-items: end;
`;

export default SelectDetailPage;

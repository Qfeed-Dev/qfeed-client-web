"use client";

import styled from "styled-components";
import BottomNavigation from "src/components/BottomNavigation";

import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { colors, repeatBackgroundColor } from "styles/theme";

import { useAppDispatch } from "src/hooks/useReduxHooks";
import { changeVisibleType } from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import Icon from "src/components/Icon/Icon";
import { useGetQuestionsId } from "src/hooks/home/useGetQuestionId";

const SelectDetailPage = ({ params }: { params: { id: number } }) => {
    const { data, isLoading, error, refetch } = useGetQuestionsId(params.id);
    console.log(data);

    const dispatch = useAppDispatch();
    const handleClickShowHint = () => {
        dispatch(
            changeVisibleType({
                type: "bottomSheet",
                value: [1, "hint"]
            })
        );
    };
    return (
        <Flex direction="column" gap={144}>
            <NavigationTopBack
                rightIcon={
                    <Flex width="auto" gap={16}>
                        <Icon icon="Share" />
                        <Icon icon="Trash" />
                    </Flex>
                }
            />
            {isLoading ? (
                <div>로딩중...</div>
            ) : (
                <>
                    <Title typo="Headline1b">{data.title}</Title>
                    <Flex direction="column" gap={8}>
                        {[0, 1, 2, 3, 4, 5].map((idx: number) => (
                            <HintWrapper key={idx}>
                                <HintItem
                                    idx={idx}
                                    onClick={handleClickShowHint}
                                >
                                    <Person
                                        typo="Subtitle2b"
                                        color="light_qblack"
                                    >
                                        02년생 여자
                                    </Person>
                                    <Message width={73}>
                                        <Icon icon="Chat" />
                                    </Message>
                                    <Hint width={73}>
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
            <BottomNavigation />
        </Flex>
    );
};

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
    background: ${({ idx }) => colors[repeatBackgroundColor[idx % 12]]};

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

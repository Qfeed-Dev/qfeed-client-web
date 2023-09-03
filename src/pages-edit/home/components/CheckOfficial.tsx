"use client";
import Spacing from "src/components/Spacing";
import { colors } from "styles/theme";
import styled, { css } from "styled-components";
import { match } from "ts-pattern";
import Text from "src/components/common/Text";
import Icon from "src/components/Icon";

import useGetUserQQuery from "src/hooks/questions/useGetUserQQuery";
import Loading from "src/components/common/Loading";
import useQsetCursorQuery from "src/hooks/questions/useQsetCursorQuery";
import { User } from "src/models/account";

interface OfficialProp {
    onClick: any;
    id: number;
}

const CheckOfficial = (props: OfficialProp) => {
    const userQ = useGetUserQQuery(props.id, "official");
    const cursor = useQsetCursorQuery();

    return userQ.isLoading || cursor.isLoading ? (
        <></>
    ) : userQ.questions.count ? (
        <BasicQuestionWrapper
            onClick={props.onClick}
            color={colors.light_qwhite}
        >
            <BasicQuestionInner>
                <Text typo="Headline2b" color="light_qblack">
                    나를 선택한 큐피드
                </Text>
                <Text typo="Caption1r" color="light_qblack">
                    총 {userQ.questions.count}번 선택받았어요!
                </Text>
                <ImageWrapper>
                    <Icon
                        icon="AngelImage"
                        fill="primary_qgreen"
                        color="primary_qgreen"
                    />
                </ImageWrapper>
            </BasicQuestionInner>
        </BasicQuestionWrapper>
    ) : (
        <></>
    );
};

const BasicQuestionWrapper = styled.div<{ color: any }>`
    width: 100%;

    border-radius: 10px;
    background-color: ${({ color }) => color};
`;

const BasicQuestionInner = styled.div`
    padding: 20px;

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const BottomButton = styled.div`
    display: flex;
`;

const ImageWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;

export default CheckOfficial;

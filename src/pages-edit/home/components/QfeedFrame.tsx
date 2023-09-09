"use client";
import { useRouter } from "next/navigation";
import { Text } from "src/components/common/Text";
import Icon from "src/components/Icon";
import Spacing from "src/components/Spacing";
import { Route } from "src/constants/Route";
import { QuestionItem } from "src/models/questions";
import { getAppStateColor } from "src/utils/colorGenerate";
import styled from "styled-components";
import { colors } from "styles/theme";

interface Props {
    idx: number;
    colorIdx: number;
    data: QuestionItem;
    detail: boolean | undefined;
}

const QfeedFrame = ({ idx, colorIdx, data, detail }: Props) => {
    const router = useRouter();
    const imageurl = data.backgroundImage.split("?")[0];

    const writeDay = Date.parse(data.createdAt);
    const today = new Date();

    const getTime = () => {
        const pastTime = Math.round(
            (today.getTime() - writeDay - 9000 * 60 * 60) / (1000 * 60 * 60)
        );
        if (pastTime === 0) {
            const pastMin = Math.round(
                (today.getTime() - writeDay - 9000 * 60 * 60) / (1000 * 60)
            );
            return pastMin ? `${pastMin}분 전` : "방금 전";
        } else {
            return `${pastTime}시간 전`;
        }
    };

    const time = getTime();

    const handleClickFrame = () => {
        // router.push(Route.QUESTION());
        router.push(`${Route.QUESTION()}/${idx}`);
    };

    return (
        <QfeedFrameWrapper
            onClick={handleClickFrame}
            repeatbackgroundcolor={
                data.isViewed && !detail
                    ? colors.light_gray3
                    : colors[getAppStateColor(colorIdx)]
            }
        >
            <div style={{ padding: 3, overflow: "hidden" }}>
                <QfeedFrameInner
                    imageurl={imageurl}
                    backgroundcolor={
                        data.isViewed && !detail
                            ? colors.light_gray3
                            : colors[getAppStateColor(colorIdx)]
                    }
                >
                    <Text
                        typo="Headline2b"
                        color={imageurl ? "light_qwhite" : "light_qblack"}
                    >
                        {data.title}
                    </Text>
                    <Spacing size={4} />
                    <Text
                        typo="Caption1r"
                        color={imageurl ? "light_qwhite" : "light_qblack"}
                    >
                        {time}
                    </Text>
                    <Spacing size={27} />
                    <CountWrapper>
                        <div style={{ margin: "auto 0" }}>
                            <Text
                                typo="Subtitle1b"
                                color={
                                    imageurl ? "line_white_50" : "light_qblack"
                                }
                            >
                                {data.choiceCount}명 응답
                            </Text>
                        </div>
                    </CountWrapper>
                </QfeedFrameInner>
            </div>
            {data.isChoiced ? undefined : (
                <QFeedWrapper>
                    {data.isViewed && !detail ? (
                        <Icon icon="QFeedImage" fill={colors.light_gray3} />
                    ) : imageurl ? (
                        <Icon
                            icon="QFeedImage"
                            fill={getAppStateColor(colorIdx)}
                        />
                    ) : (
                        <Icon icon="QFeedImage2" fill={colors.light_qblack} />
                    )}
                </QFeedWrapper>
            )}
        </QfeedFrameWrapper>
    );
};

const QfeedFrameWrapper = styled.div<{ repeatbackgroundcolor: any }>`
    width: 100%;
    height: fit-content;
    position: relative;
    border-radius: 10px;
    background-color: ${({ repeatbackgroundcolor }) => repeatbackgroundcolor};
`;

const QfeedFrameInner = styled.div<{ imageurl: any; backgroundcolor: any }>`
    padding: 28px 20px;
    overflow: hidden;
    text-align: left;

    border-radius: 10px;
    color: ${({ imageurl }) =>
        imageurl ? colors.light_qwhite : colors.light_qblack};
    background-color: ${({ imageurl }) =>
        imageurl ? colors.light_qblack : null};

    &::before {
        content: "";
        border-radius: 10px;
        background-color: ${({ imageurl, backgroundcolor }) =>
            imageurl ? null : backgroundcolor};
        background-image: url(${({ imageurl }) => imageurl});
        background-size: cover;
        background-position: center;
        opacity: 0.5;
        position: absolute;
        top: 3px;
        left: 3px;
        right: 3px;
        bottom: 3px;
        filter: ${({ backgroundcolor }) =>
            backgroundcolor === colors.light_gray3
                ? "grayscale(100%)"
                : "grayscale(0%)"};
    }

    div {
        position: relative;
    }
`;

const CountWrapper = styled.div`
    height: 36px;
    display: flex;
`;

const QFeedWrapper = styled.div`
    position: absolute;
    right: 12px;
    bottom: 28px;
`;

export default QfeedFrame;

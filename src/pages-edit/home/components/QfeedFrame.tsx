"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Text } from "src/components/common/Text";
import Icon from "src/components/Icon";
import Spacing from "src/components/Spacing";
import { Route } from "src/constants/Route";
import { QuestionItem } from "src/models/questions";
import { getAppStateColor } from "src/utils/colorGenerate";
import styled from "styled-components";
import { colors } from "styles/theme";

interface FeedProps {
    idx: number;
    colorIdx: number;
    feed: QuestionItem;
    detail: boolean | undefined;
}

const QfeedFrame = ({ idx, colorIdx, feed, detail }: FeedProps) => {
    const router = useRouter();
    const imageurl = feed.backgroundImage.split("?")[0];

    const writeDay = Date.parse(feed.createdAt);
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
        <QfeedFrameWrapper onClick={handleClickFrame}>
            <QfeedFrameInner
                imageurl={imageurl}
                backgroundcolor={
                    feed.isViewed && !detail
                        ? colors.light_gray2
                        : colors[getAppStateColor(colorIdx)]
                }
            >
                <Text
                    typo="Headline2b"
                    color={imageurl ? "light_qwhite" : "light_qblack"}
                >
                    {feed.title}
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
                            color={imageurl ? "line_white_50" : "light_qblack"}
                        >
                            {feed.choiceCount}명 응답
                        </Text>
                    </div>
                </CountWrapper>
            </QfeedFrameInner>

            {feed.isChoiced ? undefined : (
                <QFeedWrapper>
                    {feed.isViewed && !detail ? (
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
            {imageurl && (
                <BackgroundImage
                    src={imageurl}
                    imageurl={imageurl}
                    alt="QFeed"
                    fill={true}
                    backgroundcolor={
                        feed.isViewed && !detail
                            ? colors.light_gray2
                            : colors[getAppStateColor(colorIdx)]
                    }
                />
            )}
        </QfeedFrameWrapper>
    );
};

const QfeedFrameWrapper = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    border-radius: 10px;
`;

const QFeedWrapper = styled.div`
    position: absolute;
    right: 12px;
    bottom: 28px;
`;

const QfeedFrameInner = styled.div<{ imageurl: string; backgroundcolor: any }>`
    padding: 28px 20px;
    overflow: hidden;
    text-align: left;

    border-radius: 10px;
    border: 3px solid ${({ backgroundcolor }) => backgroundcolor};
    color: ${({ imageurl }) =>
        imageurl ? colors.light_qwhite : colors.light_qblack};
    background-color: ${({ imageurl, backgroundcolor }) =>
        imageurl ? colors.line_black_50 : backgroundcolor};
`;

const CountWrapper = styled.div`
    height: 36px;
    display: flex;
`;

const BackgroundImage = styled(Image)<{
    imageurl: string;
    backgroundcolor: any;
}>`
    border-radius: 10px;
    object-fit: cover;

    filter: ${({ backgroundcolor }) =>
        backgroundcolor === colors.light_gray2
            ? "grayscale(100%)"
            : "grayscale(0%)"};

    position: absolute;
    z-index: -1;
`;

export default QfeedFrame;

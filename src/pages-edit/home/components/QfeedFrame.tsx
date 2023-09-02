"use client";
import { useRouter } from "next/navigation";
import { Text } from "src/components/common/Text";
import Icon from "src/components/Icon";
import Spacing from "src/components/Spacing";
import { Route } from "src/constants/Route";
import { getAppStateColor } from "src/utils/colorGenerate";
import styled from "styled-components";
import { colors, repeatBackgroundColor, typo } from "styles/theme";

interface Props {
    idx: number;
    data: any;
}

const QfeedFrame = ({ idx, data }: Props) => {
    const router = useRouter();
    const imageUrl = data.backgroundImage;

    const writeDay = new Date(data.createdAt);
    const today = new Date();

    const pastTime = Math.round(
        (today.getTime() - writeDay.getTime()) / (1000 * 60 * 60)
    );

    const handleClickFrame = () => {
        // router.push(Route.QUESTION());
        router.push(`${Route.QUESTION()}/${data.id}`);
    };

    return (
        <QfeedFrameWrapper
            onClick={handleClickFrame}
            repeatBackgroundColor={colors[getAppStateColor(idx)]}
        >
            <div style={{ padding: 3, overflow: "hidden" }}>
                <QfeedFrameInner
                    imageUrl={imageUrl}
                    backgroundColor={colors[getAppStateColor(idx)]}
                >
                    <Text
                        typo="Headline2b"
                        color={imageUrl ? "light_qwhite" : "light_qblack"}
                    >
                        {data.title}
                    </Text>
                    <Spacing size={4} />
                    <Text
                        typo="Caption1r"
                        color={imageUrl ? "light_qwhite" : "light_qblack"}
                    >
                        {pastTime}시간 전
                    </Text>
                    <Spacing size={27} />
                    <CountWrapper>
                        <div style={{ margin: "auto 0" }}>
                            <Text
                                typo="Subtitle1b"
                                color={
                                    imageUrl ? "line_white_50" : "light_qblack"
                                }
                            >
                                {data.choiceCount}명 응답
                            </Text>
                        </div>
                    </CountWrapper>
                </QfeedFrameInner>
            </div>
            {data.isViewed ? undefined : (
                <QFeedWrapper>
                    {imageUrl ? (
                        <Icon
                            icon="QFeedImage"
                            color={getAppStateColor(idx)}
                            fill={getAppStateColor(idx)}
                        />
                    ) : (
                        <Icon icon="QFeedImage2" />
                    )}
                </QFeedWrapper>
            )}
        </QfeedFrameWrapper>
    );
};

const QfeedFrameWrapper = styled.div<{ repeatBackgroundColor: any }>`
    height: calc(100% + 20px);
    position: relative;
    border-radius: 10px;
    background-color: ${({ repeatBackgroundColor }) => repeatBackgroundColor};
`;

const QfeedFrameInner = styled.div<{ imageUrl: any; backgroundColor: any }>`
    padding: 28px 20px;
    overflow: hidden;

    border-radius: 10px;
    color: ${({ imageUrl }) =>
        imageUrl ? colors.light_qwhite : colors.light_qblack};
    background-color: ${({ imageUrl }) =>
        imageUrl ? colors.light_qblack : null};

    &::before {
        content: "";
        border-radius: 10px;
        background-color: ${({ imageUrl, backgroundColor }) =>
            imageUrl ? null : backgroundColor};
        background-image: url(${({ imageUrl }) => imageUrl});
        background-size: cover;
        background-position: center;
        opacity: 0.5;
        position: absolute;
        top: 3px;
        left: 3px;
        right: 3px;
        bottom: 3px;
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

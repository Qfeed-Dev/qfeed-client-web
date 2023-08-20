"use client";
import { useRouter } from "next/navigation";
import Image from "src/components/Image";
import { colors } from "styles/theme";
import { Route } from "src/constants/Route";
import { useAppDispatch } from "src/hooks/useReduxHooks";
import { changeVisibleType } from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import styled from "styled-components";
import Icon from "src/components/Icon";
import Text from "src/components/common/Text";

const HomeTitle = ({}: {}) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const handleClickAlarm = () => {
        router.push(Route.ALARM());
    };

    const handleClickCoin = () => {
        dispatch(
            changeVisibleType({
                type: "bottomSheet",
                value: [1, "coin"]
            })
        );
    };

    return (
        <HomeTitleWrapper>
            <Menu>
                <ImageWrapper>
                    <Image
                        type="default"
                        size={40}
                        src="https://i.ibb.co/0Z6FNN7/60pt.png"
                    />
                </ImageWrapper>
            </Menu>
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <Text
                    typo="Caption1b"
                    color="light_qwhite"
                    onClick={handleClickCoin}
                >
                    코인충전
                </Text>
                <Text
                    typo="Caption1b"
                    color="light_qwhite"
                    onClick={handleClickAlarm}
                >
                    질문추천
                </Text>
                <Menu onClick={handleClickAlarm}>
                    <Icon icon="Alarm" />
                </Menu>
            </div>
        </HomeTitleWrapper>
    );
};

const HomeTitleWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    height: 50px;
    padding: 0 16px;

    position: fixed;
    top: 0;

    display: flex;
    justify-content: space-between;
    background-color: ${colors.light_qblack};
    z-index: 900;
`;

const Menu = styled.div`
    margin: auto 0;
    display: flex;
    color: ${colors.light_qwhite};
`;

const ImageWrapper = styled.div`
    width: 46px;
    height: 46px;
    display: flex;

    border-radius: 50%;
    background-color: ${colors.light_qwhite};
`;

export default HomeTitle;

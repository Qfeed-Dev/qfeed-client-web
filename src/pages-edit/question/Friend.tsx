"use client";
import { useState } from "react";
import { Text } from "src/components/common/Text";
import Image from "src/components/Image";
import Spacing from "src/components/Spacing";
import useDisplaySize from "src/hooks/useDisplaySize";
import { useAppDispatch, useAppSelector } from "src/hooks/useReduxHooks";
import { changeVisibleType } from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import styled from "styled-components";
import { colors, repeatBackgroundColor } from "styles/theme";

export default function Friend({ idx }: any) {
    const { width } = useDisplaySize();
    const dispatch = useAppDispatch();
    const { visible, selectedIdx } = useAppSelector(
        (state) => state.bottomSheet
    );

    const handleClickFriend = () => {
        dispatch(
            changeVisibleType({
                type: "bottomSheet",
                value: [1, "friend", idx]
            })
        );
    };

    return (
        <FriendWrapper
            width={(width - 16 * 2 - 12 * 3) / 4}
            onClick={handleClickFriend}
            backgroundColor={
                selectedIdx && idx !== selectedIdx && visible === 1
                    ? colors.light_gray2
                    : colors[repeatBackgroundColor[idx % 12]]
            }
        >
            <FriendInner>
                <Menu>
                    <Image
                        type="default"
                        size={35}
                        src="https://i.ibb.co/0Z6FNN7/60pt.png"
                        grayscale={
                            selectedIdx && idx !== selectedIdx && visible === 1
                                ? 100
                                : 0
                        }
                    />
                </Menu>
                <Spacing size={8} />

                <Menu>
                    <Text typo="Caption1b" color="light_qblack">
                        김은별
                    </Text>
                </Menu>
                <Menu>
                    <Text typo="Caption2r" color="light_qblack">
                        dlraud1
                    </Text>
                </Menu>
            </FriendInner>
        </FriendWrapper>
    );
}

const FriendWrapper = styled.div<{ width: number; backgroundColor: any }>`
    width: ${({ width }) => width + "px"};
    //   height: ${({ width }) => (width * 92) / 73 + "px"};

    border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

const FriendInner = styled.div`
    padding: 8px 20px;
`;

const Menu = styled.div`
    text-align: center;
`;

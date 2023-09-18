"use client";
import { useState } from "react";
import { Text } from "src/components/common/Text";
import Image from "src/components/Image";
import Spacing from "src/components/Spacing";
import useDisplaySize from "src/hooks/useDisplaySize";
import { useAppDispatch, useAppSelector } from "src/hooks/useReduxHooks";
import { Friend } from "src/models/account";
import { changeVisibleType } from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import styled from "styled-components";
import Profile from "../../components/Profile/Profile";
import FriendProfile from "src/components/Profile/FriendProfile";
import Flex from "src/components/common/Flex";

export default function FriendItem({
    idx,
    bgColor,
    data,
    qset
}: {
    idx: number;
    bgColor: string;
    data: Friend;
    qset: number;
}) {
    const { width } = useDisplaySize();
    const dispatch = useAppDispatch();
    const { visible, selectedIdx } = useAppSelector(
        (state) => state.bottomSheet
    );

    const handleClickFriend = () => {
        dispatch(
            changeVisibleType({
                type: "bottomSheet",
                value: [1, "friend", data.id, qset]
            })
        );
    };

    return (
        <FriendWrapper
            width={(width - 16 * 2 - 12 * 3) / 4}
            onClick={handleClickFriend}
            backgroundColor={bgColor}
        >
            <FriendInner direction="column" gap={8}>
                <FriendProfile
                    width={35}
                    url={data?.profileImage}
                    grayscale={
                        selectedIdx == null || selectedIdx === data.id ? 0 : 100
                    }
                />
                <Flex direction="column">
                    <Text typo="Caption1b" color="light_qblack">
                        {data?.name}
                    </Text>
                    <Text typo="Caption2r" color="light_qblack">
                        {data?.nickname}
                    </Text>
                </Flex>
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

const FriendInner = styled(Flex)`
    padding: 8px 20px;
`;

const Menu = styled.div`
    text-align: center;
`;

"use client";
import { useRouter } from "next/navigation";
import { postChatroom } from "src/apis/chatting";
import { Text } from "src/components/common/Text";
import Image from "src/components/Image";
import Spacing from "src/components/Spacing";
import { Route } from "src/constants/Route";
import useDisplaySize from "src/hooks/common/useDisplaySize";
import { useAppDispatch, useAppSelector } from "src/hooks/common/useReduxHooks";
import styled from "styled-components";
import { colors, repeatBackgroundColor } from "styles/theme";

export default function Friend({ idx, data }: any) {
    const router = useRouter();
    const { width } = useDisplaySize();
    const { visible, selectedIdx } = useAppSelector(
        (state) => state.bottomSheet
    );

    const handleClickFriend = () => {
        postChatroom({
            targetUserId: data.id,
            title: ``
        }).then((data) => router.push(Route.CHATTING(data.id)));
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
                        src={data?.profileImage ? data?.profileImage : ""}
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
                        {data?.name}
                    </Text>
                </Menu>
                <Menu>
                    <Text typo="Caption2r" color="light_qblack">
                        {data?.nickname}
                    </Text>
                </Menu>
            </FriendInner>
        </FriendWrapper>
    );
}

const FriendWrapper = styled.div<{ width: number; backgroundColor: any }>`
    width: ${({ width }) => width + "px"};

    border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

const FriendInner = styled.div`
    padding: 8px 20px;
`;

const Menu = styled.div`
    text-align: center;
`;

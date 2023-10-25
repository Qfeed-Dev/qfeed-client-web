"use client";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import styled from "styled-components";
import { colors } from "styles/theme";

import useBlockFriendMutation from "src/hooks/account/useBlockFriendMutation";
import { useAppSelector, useAppDispatch } from "src/hooks/useReduxHooks";
import {
    changeAction,
    changeVisibleType
} from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import { useRouter } from "next/navigation";

const ReportBlock = () => {
    const blockFriend = useBlockFriendMutation();
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { selectedIdx } = useAppSelector((state) => state.bottomSheet);

    return (
        <Flex height="100%" direction="column">
            <Menu
                border
                onClick={() => {
                    blockFriend.mutate(selectedIdx);
                    dispatch(
                        changeAction({
                            type: "bottomSheet",
                            value: { on: false }
                        })
                    );
                }}
            >
                <Text typo="Subtitle2r">차단하기</Text>
            </Menu>
            <Menu
                onClick={() => {
                    dispatch(
                        changeAction({
                            type: "bottomSheet",
                            value: { on: false }
                        })
                    );
                    setTimeout(
                        () =>
                            dispatch(
                                changeVisibleType({
                                    type: "bottomSheet",
                                    value: [1, "report"]
                                })
                            ),
                        400
                    );
                }}
            >
                <Text typo="Subtitle2r" color="primary_qred">
                    신고하기
                </Text>
            </Menu>
        </Flex>
    );
};

const Menu = styled.div<{ border?: boolean }>`
    width: 100%;
    padding: 1rem 0;

    display: flex;
    justify-content: center;

    border-bottom: ${({ border }) =>
        border && `1px solid ${colors.line_black_5}`};
`;

export default ReportBlock;

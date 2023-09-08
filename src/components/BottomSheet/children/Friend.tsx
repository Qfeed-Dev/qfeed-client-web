"use client";
import Loading from "src/components/common/Loading";
import Text from "src/components/common/Text";
import Image from "src/components/Image";
import Spacing from "src/components/Spacing";
import Textarea from "src/components/Textarea";
import useFriendQuery from "src/hooks/account/useFriendQuery";
import { useInput } from "src/hooks/common/useInput";
import useCreateCharacter from "src/hooks/questions/useQsetChoiceMutation";
import { useAppDispatch, useAppSelector } from "src/hooks/common/useReduxHooks";
import { getAppStateColor } from "src/utils/colorGenerate";
import styled from "styled-components";
import { colors, KeyOfColor } from "styles/theme";
import {
    changeAction,
    changeVisibleType
} from "src/reducer/slices/bottomSheet/bottomSheetSlice";

interface Props {}

const Friend = ({}: Props) => {
    const { selectedIdx, qset } = useAppSelector((state) => state.bottomSheet);
    const textarea = useInput();
    const friend = useFriendQuery(selectedIdx);
    const choice = useCreateCharacter(qset, {
        targetUserId: selectedIdx,
        value: textarea.value
    });
    const dispatch = useAppDispatch();

    return (
        <FrinedWrapper>
            <Spacing size={12} />
            {friend.isLoading ? (
                <Loading />
            ) : (
                <Menu>
                    <Image type="default" src="" size={60} />
                    <Spacing size={10} />
                    <Text typo="Subtitle2b">{friend.friend?.name}</Text>
                    <Text typo="Caption1r">{friend.friend?.nickname}</Text>

                    <Spacing size={20} />
                    <TextareaWrapper>
                        <Textarea
                            placeholder="투표한 친구에게 한 마디 작성해보세요!"
                            size={82}
                            value={textarea.value}
                            setValue={textarea.handleChangeInput}
                        />
                    </TextareaWrapper>

                    <Spacing size={42} />
                    <ButtonBox
                        backgroundColor={getAppStateColor(selectedIdx)}
                        onClick={() => {
                            choice.mutate();
                            dispatch(
                                changeVisibleType({
                                    type: "bottomSheet",
                                    value: [0, "friend", null, qset]
                                })
                            );
                        }}
                    >
                        <Text typo="Subtitle1b" style={{ margin: "auto" }}>
                            보내기
                        </Text>
                    </ButtonBox>
                </Menu>
            )}
        </FrinedWrapper>
    );
};

const FrinedWrapper = styled.div`
    width: 100%;
`;

const Menu = styled.div`
    text-align: center;
`;

const TextareaWrapper = styled.div`
    width: 100%;
`;

const ButtonBox = styled.div<{ backgroundColor: KeyOfColor }>`
    width: 100%;
    height: 47px;
    display: flex;

    border-radius: 10px;
    background-color: ${({ backgroundColor }) => colors[backgroundColor]};
`;

export default Friend;

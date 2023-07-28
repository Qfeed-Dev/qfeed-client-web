"use client";
import Image from "src/components/Image";
import Spacing from "src/components/Spacing";
import { colors } from "src/constants/colors";
import useDisplaySize from "src/hooks/useDisplaySize";
import { useAppDispatch } from "src/hooks/useReduxHooks";
import { changeVisibleType } from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import { styled } from "styled-components";

export default function Friend() {
  const { width } = useDisplaySize();
  const dispatch = useAppDispatch();

  const handleClickFriend = () => {
    dispatch(
      changeVisibleType({
        type: "bottomSheet",
        value: [1, "friend"],
      })
    );
  };

  return (
    <FriendWrapper
      width={(width - 16 * 2 - 12 * 3) / 4}
      onClick={handleClickFriend}
    >
      <FriendInner>
        <Menu>
          <Image src="https://i.ibb.co/0Z6FNN7/60pt.png" type="friend" />
        </Menu>
        <Spacing size={8} />

        <Menu>
          <Name>김은별</Name>
        </Menu>
        <Menu>
          <QfeedId>dlraud1</QfeedId>
        </Menu>
      </FriendInner>
    </FriendWrapper>
  );
}

const FriendWrapper = styled.div<{ width: number }>`
  width: ${({ width }) => width + "px"};
  //   height: ${({ width }) => (width * 92) / 73 + "px"};

  border-radius: 10px;
  background-color: ${colors.Qorange};
`;

const FriendInner = styled.div`
  padding: 8px 20px;
`;

const Menu = styled.div`
  text-align: center;
`;

const Name = styled.div``;

const QfeedId = styled.div``;

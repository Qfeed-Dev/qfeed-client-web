"use client";
import { useRouter } from "next/navigation";
import Image from "src/components/Image";
import { colors } from "src/constants/colors";
import { Route } from "src/constants/Route";
import { useAppDispatch } from "src/hooks/useReduxHooks";
import { changeVisibleType } from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import styled from "styled-components";

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
        value: [1, "coin"],
      })
    );
  };

  return (
    <HomeTitleWrapper>
      <Menu>
        <ImageWrapper>
          <Image type="profile" src="https://i.ibb.co/0Z6FNN7/60pt.png" />
        </ImageWrapper>
      </Menu>
      <div style={{ display: "flex", gap: "24px" }}>
        <Menu onClick={handleClickCoin}>
          <div>코인충전</div>
        </Menu>
        <Menu>
          <div>질문추천</div>
        </Menu>
        <Menu onClick={handleClickAlarm}>
          <div>svg</div>
        </Menu>
      </div>
    </HomeTitleWrapper>
  );
};

const HomeTitleWrapper = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
`;

const Menu = styled.div`
  margin: auto 0;
  display: flex;
  color: ${colors.Qwhite};
`;

const ImageWrapper = styled.div`
  width: 46px;
  height: 46px;
  display: flex;

  border-radius: 50%;
  background-color: ${colors.Qwhite};
`;

export default HomeTitle;

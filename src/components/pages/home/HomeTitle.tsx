"use client";
import Image from "src/components/Image";
import { colors } from "src/constants/colors";
import { styled } from "styled-components";

const HomeTitle = ({}: {}) => {
  return (
    <HomeTitleWrapper>
      <Menu>
        <Image type="profile" src="https://i.ibb.co/0Z6FNN7/60pt.png" />
      </Menu>
      <div style={{ display: "flex", gap: "24px" }}>
        <Menu>
          <div>코인충전</div>
        </Menu>
        <Menu>
          <div>질문추천</div>
        </Menu>
        <Menu>
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
  color: ${colors.Qwhite};
`;

export default HomeTitle;

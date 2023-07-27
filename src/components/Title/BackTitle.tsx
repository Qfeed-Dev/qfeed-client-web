"use client";
import { useRouter } from "next/navigation";
import { colors } from "src/constants/colors";
import { styled } from "styled-components";

export default function BackTitle() {
  const router = useRouter();
  const handleClickBack = () => {
    router.back();
  };

  return (
    <BackTitleWrapper>
      <BackTitleInner>
        <Menu onClick={handleClickBack}>&lt;--</Menu>
        <Menu>7/10</Menu>
        <Menu>&lt;--</Menu>
      </BackTitleInner>
    </BackTitleWrapper>
  );
}

const BackTitleWrapper = styled.div`
  width: 100%;
  height: 50px;

  position: absolute;
  top: 0;
  left: 0;

  background-color: ${colors.Qblack};
`;

const BackTitleInner = styled.div`
  height: 50px;
  margin: auto;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  color: ${colors.Qwhite};
`;

const Menu = styled.div`
  //   width: 40px;
  margin: auto 0;
  text-align: center;
`;

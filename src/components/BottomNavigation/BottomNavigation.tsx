"use client";
import { colors } from "src/constants/colors";
import { styled } from "styled-components";

interface Props {}

const BottomNavigation = ({}: Props) => {
  return (
    <BottomNavigationWrapper>
      <BottomNavigationInner>
        <div>Hi</div>
        <div>Hi</div>
        <div>Hi</div>
        <div>Hi</div>
      </BottomNavigationInner>
    </BottomNavigationWrapper>
  );
};

const BottomNavigationWrapper = styled.div`
  width: 100%;
  height: 68px;

  position: fixed;
  bottom: 0;
  background-color: ${colors.Qblack};
`;

const BottomNavigationInner = styled.div`
  height: 100%;
  padding: 0 48px;

  color: ${colors.Qwhite};
  display: flex;
  justify-content: space-between;

  border-top: 1px solid ${colors.Qwhite};
`;

export default BottomNavigation;

"use client";
import { colors } from "src/constants/colors";
import { styled } from "styled-components";
import { match } from "ts-pattern";

interface Props {
  type: "question-friend" | "add-question";
}

const Input = ({ type }: Props) => {
  return (
    <InputWrapper
      radius={match(type)
        .with("question-friend", () => 48)
        .with("add-question", () => 0)
        .exhaustive()}
    >
      <InputInner>
        <InputBox placeholder="내 친구의 이름을 검색해보세요." />
        <div style={{ display: "flex" }}>
          {type === "add-question" && <div>0/20</div>}
          <div>Hi</div>
        </div>
      </InputInner>
    </InputWrapper>
  );
};

const InputWrapper = styled.div<{ radius: number }>`
  width: 100%;
  height: 48px;

  display: flex;
  border-radius: ${({ radius }) => radius}px;
  background-color: ${colors.Gray3};
`;

const InputInner = styled.div`
  width: 100%;
  margin: auto 0;
  padding: 0 20px;

  display: flex;
  gap: 8px;
`;

const InputBox = styled.input`
  width: 100%;
  margin: 0;
  padding: 0;

  outline: 0;
  border: 0;
  color: ${colors.Qwhite};
  background-color: ${colors.Gray3};

  &::placeholder {
    color: ${colors.Gray2};
  }
`;

export default Input;

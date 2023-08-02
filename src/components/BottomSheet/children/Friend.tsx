"use client";
import Button from "src/components/Button";
import Image from "src/components/Image";
import Spacing from "src/components/Spacing";
import Textarea from "src/components/Textarea";
import { styled } from "styled-components";

interface Props {}

const Frined = ({}: Props) => {
  return (
    <FrinedWrapper>
      <Spacing size={12} />
      <Menu>
        <Image
          type="default"
          src="https://i.ibb.co/0Z6FNN7/60pt.png"
          size={60}
        />
        <Spacing size={10} />
        <Name>이현성</Name>
        <QfeedId>dlraud1</QfeedId>

        <Spacing size={20} />
        <TextareaWrapper>
          <Textarea
            placeholder="투표한 친구에게 한 마디 작성해보세요!"
            size={82}
          />
        </TextareaWrapper>

        <Spacing size={42} />
        <Button type="primary">보내기</Button>
      </Menu>
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
  width: calc(100% - 20px);
`;

const Name = styled.div``;

const QfeedId = styled.div``;

export default Frined;

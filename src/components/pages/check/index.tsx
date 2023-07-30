'use client';
import { styled } from 'styled-components';
import { Text } from 'src/components/common/Text';

const Hi = () => {
  return (
    <Text typo="Headline1b" color="primary_qgreen">
      테스트 페이지입니다.
    </Text>
  );
};

const Test = styled.div`
  width: 100%;
  height: 2rem;
`;

export default Hi;

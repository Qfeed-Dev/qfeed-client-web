import Text from "src/components/common/Text";
import styled from "styled-components";
import { colors } from "styles/theme";

export default function Question() {
    return (
        <QuestionWrapper>
            <Text
                typo="Subtitle2b"
                color="light_qblack"
                style={{ marginBottom: 6 }}
            >
                애인에게 가장 잘 해줄 것 같은 사람은?
            </Text>
            <Text
                typo="Caption2r"
                color="light_gray3"
                style={{ marginBottom: 16 }}
            >
                06년생 남자로부터
            </Text>
            <Text typo="Caption2r" color="light_gray3">
                쪽지 이용 시 개인정보 및 금융정보 보호에 유의해주시기 바랍니다.
                광고, 스팸, 사기 등의 쪽지를 받으셨을 경우 스팸 신고를
                눌러주세요.
            </Text>
        </QuestionWrapper>
    );
}

const QuestionWrapper = styled.div`
    width: 100%;
    padding: 16px;

    border-radius: 10px;
    background-color: ${colors.light_gray0};
`;

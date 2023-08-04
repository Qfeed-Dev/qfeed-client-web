import Image from "src/components/Image";
import Spacing from "src/components/Spacing";
import { colors } from "src/constants/colors";
import { styled } from "styled-components";

export default function NewAlarm() {
    return (
        <>
            <NewAlarmWrapper>
                <Menu>
                    <Image
                        type="default"
                        size={40}
                        src="https://i.ibb.co/0Z6FNN7/60pt.png"
                    />
                </Menu>
                <Menu>
                    <Title>나를 선택한 AXE</Title>
                    <Description>
                        애인에게 가장 잘 해줄 것 같은 사람은? : AXE에 3명이 날
                        선택했어요.
                    </Description>
                    <Time>05/04 11:42</Time>
                </Menu>
            </NewAlarmWrapper>
            <Spacing size={20} />
        </>
    );
}

const NewAlarmWrapper = styled.div`
    display: flex;
`;

const Menu = styled.div``;

const Title = styled.div`
    color: ${colors.Qwhite};
`;
const Description = styled.div`
    color: ${colors.Qwhite};
`;
const Time = styled.div`
    color: ${colors.Qwhite};
`;

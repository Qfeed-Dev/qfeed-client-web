import { Text } from "src/components/common/Text";
import Image from "src/components/Image";
import Spacing from "src/components/Spacing";
import styled, { css } from "styled-components";
import { colors } from "styles/theme";

export default function NewAlarm() {
    return (
        <>
            <NewAlarmWrapper action={false}>
                <div style={{ marginRight: 12 }}>
                    <Image type="default" size={40} src="" />
                </div>
                <Menu>
                    <Text typo="Subtitle1b" color="light_qwhite">
                        나를 선택한 AXE
                    </Text>
                    <Text typo="Subtitle1r" color="light_qwhite">
                        애인에게 가장 잘 해줄 것 같은 사람은? : AXE에 3명이 날
                        선택했어요.
                    </Text>
                    <Text typo="Caption2r" color="light_gray2">
                        05/04 11:42
                    </Text>
                </Menu>
            </NewAlarmWrapper>
        </>
    );
}

const NewAlarmWrapper = styled.div<{ action: boolean }>`
    padding: 8px 16px;
    display: flex;
    ${({ action }) =>
        action &&
        css`
            background-color: ${colors.light_gray3};
        `}
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

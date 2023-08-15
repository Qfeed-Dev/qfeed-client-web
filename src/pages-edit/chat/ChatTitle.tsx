import Text from "src/components/common/Text";
import styled from "styled-components";
import { colors } from "styles/theme";
import Spacing from "src/components/Spacing";

export default function ChatTitle() {
    return (
        <>
            <Spacing size={50} />
            <TitleWrapper>
                <TitleInner>
                    <Text typo="Headline1b" color="light_qwhite">
                        쪽지함
                    </Text>
                </TitleInner>
            </TitleWrapper>
        </>
    );
}

const TitleWrapper = styled.div`
    width: 100%;
    height: 50px;

    position: fixed;
    top: 0;

    display: flex;
    background-color: ${colors.light_qblack};
    z-index: 900;
`;

const TitleInner = styled.div`
    margin: auto 0;
    display: flex;
`;

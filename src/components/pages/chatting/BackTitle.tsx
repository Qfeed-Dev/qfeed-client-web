import Text from "src/components/common/Text";
import Icon from "src/components/Icon";
import styled from "styled-components";
import { colors } from "styles/theme";
import Spacing from "src/components/Spacing";
import { useRouter } from "next/navigation";

export default function BackTitle() {
    const router = useRouter();

    return (
        <>
            <Spacing size={60} />
            <TitleWrapper>
                <TitleInner>
                    <div style={{ display: "flex" }}>
                        <Icon
                            icon="LeftArrow"
                            onClick={() => {
                                router.back();
                            }}
                        />
                        <Text
                            typo="Headline1b"
                            color="light_qwhite"
                            style={{ marginLeft: 16 }}
                        >
                            00년생 남자
                        </Text>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Icon icon="Alarm" />
                        <div
                            style={{
                                width: 24
                            }}
                        />
                        <Icon icon="Dots" />
                    </div>
                </TitleInner>
            </TitleWrapper>
        </>
    );
}

const TitleWrapper = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 16px;

    position: fixed;
    top: 0;

    display: flex;
    background-color: ${colors.light_qblack};
    z-index: 900;
`;

const TitleInner = styled.div`
    width: 100%;
    margin: auto 0;
    display: flex;

    justify-content: space-between;
`;

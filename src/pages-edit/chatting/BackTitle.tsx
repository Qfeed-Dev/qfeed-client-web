import Text from "src/components/common/Text";
import Icon from "src/components/Icon";
import styled from "styled-components";
import { colors } from "styles/theme";
import Spacing from "src/components/Spacing";
import { useRouter } from "next/navigation";
import { ChattingUser } from "../chat/Chatting";

export default function BackTitle({
    title,
    targetUser
}: {
    title: string;
    targetUser: ChattingUser;
}) {
    const router = useRouter();

    return (
        <>
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
                            {title ?? targetUser?.name ?? "제목이 없음"}
                        </Text>
                    </div>
                    <div style={{ display: "flex" }}>
                        {/* <Icon icon="Alarm" />
                        <div
                            style={{
                                width: 24
                            }}
                        /> */}
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

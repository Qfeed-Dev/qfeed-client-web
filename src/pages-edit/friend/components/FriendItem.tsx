import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";

import styled from "styled-components";
import { colors } from "styles/theme";

import { useRouter } from "next/navigation";

import ButtonFillXSmall from "src/components/buttons/button-fill-xsmall";

export default function FriendItem() {
    const router = useRouter();

    return (
        <FriendWrapper
            justify="space-between"
            onClick={() => router.push("/friend/1")}
        >
            <Flex width="auto" gap={16}>
                <ImgCover></ImgCover>
                <Flex direction="column">
                    <Text typo="Subtitle1b">김은별</Text>
                    <Text typo="Caption1r">@adjlka</Text>
                </Flex>
            </Flex>
            <ButtonFillXSmall
                text="팔로잉"
                onClick={() => {}}
                color="light_gray1"
            ></ButtonFillXSmall>
        </FriendWrapper>
    );
}

const FriendWrapper = styled(Flex)`
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.line_white_5};
`;

const ImgCover = styled.div`
    min-width: 35px;
    min-height: 35px;
    background: ${colors.light_gray1};

    border-radius: 50%;
`;

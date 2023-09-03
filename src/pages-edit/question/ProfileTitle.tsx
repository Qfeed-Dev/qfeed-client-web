"use client";
import { useRouter } from "next/navigation";
import { Text } from "src/components/common/Text";
import Image from "src/components/Image";
import { colors } from "styles/theme";
import styled from "styled-components";

export default function ProfileTitle({ data }: any) {
    const router = useRouter();

    return (
        <ProfileTitleWrapper>
            <ProfileTitleInner>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                        type="default"
                        size={35}
                        src={
                            data?.owner?.profileImage
                                ? data?.owner?.profileImage
                                : "https://i.ibb.co/0Z6FNN7/60pt.png"
                        }
                    />
                    <Text typo="Subtitle1b" style={{ marginLeft: 8 }}>
                        {data?.owner?.nickname}
                    </Text>
                </div>
                <Menu>{data?.choices?.length}명 응답</Menu>
            </ProfileTitleInner>
        </ProfileTitleWrapper>
    );
}

const ProfileTitleWrapper = styled.div`
    width: 100%;
    height: 50px;

    background-color: transparent;
`;

const ProfileTitleInner = styled.div`
    height: 50px;
    margin: auto;

    display: flex;
    justify-content: space-between;
    color: ${colors.light_qwhite};
`;

const Menu = styled(Text)`
    //   width: 40px;
    margin: auto 0;
    text-align: center;
`;

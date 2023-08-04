"use client";
import { useRouter } from "next/navigation";
import { Text } from "src/components/common/Text";
import Image from "src/components/Image";
import { colors } from "src/constants/colors";
import { styled } from "styled-components";

export default function ProfileTitle() {
    const router = useRouter();

    return (
        <ProfileTitleWrapper>
            <ProfileTitleInner>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                        type="default"
                        size={35}
                        src="https://i.ibb.co/0Z6FNN7/60pt.png"
                    />
                    <Text typo="Subtitle1b" style={{ marginLeft: 8 }}>
                        dlraud56
                    </Text>
                </div>
                <Menu>12명 응답</Menu>
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
    color: ${colors.Qwhite};
`;

const Menu = styled.div`
    //   width: 40px;
    margin: auto 0;
    text-align: center;
`;

"use client";
import { useRouter } from "next/navigation";
import Image from "src/components/Image";
import { colors } from "src/constants/colors";
import styled from "styled-components";

export default function ProfileTitle() {
    const router = useRouter();

    return (
        <ProfileTitleWrapper>
            <ProfileTitleInner>
                <div style={{ display: "flex" }}>
                    <Menu>
                        <Image
                            src="https://i.ibb.co/0Z6FNN7/60pt.png"
                            type="friend"
                        />
                    </Menu>
                    <Menu>dlraud56</Menu>
                </div>
                <Menu>12명 응답</Menu>
            </ProfileTitleInner>
        </ProfileTitleWrapper>
    );
}

const ProfileTitleWrapper = styled.div`
    width: 100%;
    height: 50px;

    background-color: ${colors.Qblack};
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

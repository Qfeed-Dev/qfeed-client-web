import { styled } from "styled-components";
import { useState, ChangeEvent, useEffect } from "react";

import { colors } from "styles/theme";

import { useUserMutation } from "src/hooks/account/useUserMutation";
import usePhotoMutation from "src/hooks/file/usePhotoMutation";
import { useUserQuery } from "src/hooks/account/useUserQuery";

interface ProfileProp {
    width: number;
    onClick?: any;
}

const Profile = ({ width, onClick }: ProfileProp) => {
    const { userMutation } = useUserMutation();
    const user = useUserQuery();
    const photo = usePhotoMutation();

    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const targetFile = e.target.files[0];
            imgUpload(targetFile);
        }
    };

    const imgUpload = async (file: File) => {
        const url = file
            ? await photo.mutateAsync({
                  appName: "account",
                  file: file
              })
            : "";
        userMutation.mutate({
            profileImage: url ? url.imageUrl : url
        });
    };

    return (
        <ProfileWrapper id="profileImage" width={width} onClick={onClick}>
            {!onClick && (
                <input
                    type="file"
                    id="profileImage"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    accept="image/x-png, image/gif, image/jpeg"
                />
            )}
            {user.user?.profileImage && (
                <ProfileImg src={user.user?.profileImage} />
            )}
        </ProfileWrapper>
    );
};

const ProfileWrapper = styled.label<{ width: number }>`
    width: ${({ width }) => width}px;
    height: ${({ width }) => width}px;

    background: ${colors.light_gray3};

    border: 3px solid ${colors.light_qwhite};
    border-radius: 50%;
    overflow: hidden;
`;

const ProfileImg = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

export default Profile;

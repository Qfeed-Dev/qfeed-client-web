import { styled } from "styled-components";
import { useState, ChangeEvent, useEffect } from "react";

import { colors } from "styles/theme";

import { useUserMutation } from "src/hooks/account/useUserMutation";
import usePhotoMutation from "src/hooks/file/usePhotoMutation";
import { useUserQuery } from "src/hooks/account/useUserQuery";

const Profile = () => {
    const { userMutation } = useUserMutation();
    const user = useUserQuery();
    const photo = usePhotoMutation();

    const [file, setFile] = useState<File | undefined>();

    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            setFile(file);
        }
    };

    const clickUpload = async () => {
        const url = file
            ? await photo.mutateAsync({
                  appName: "account",
                  file: file
              })
            : "";
        userMutation.mutate({
            profileImage: url ? url.presignedUrl : url
        });
    };

    useEffect(() => {
        clickUpload;
    }, [file]);

    return (
        <ProfileWrapper id="profileImage">
            <input
                type="file"
                id="profileImage"
                style={{ display: "none" }}
                onChange={handleImageChange}
                accept="image/x-png, image/gif, image/jpeg"
            />
            <ProfileImg src={user.user?.profileImage} />
        </ProfileWrapper>
    );
};

const ProfileWrapper = styled.label`
    width: 72px;
    height: 72px;

    background: ${colors.light_gray3};

    border-radius: 50%;
    object-fit: cover;
`;

const ProfileImg = styled.img`
    width: 100%;
    height: 100%;
`;

export default Profile;

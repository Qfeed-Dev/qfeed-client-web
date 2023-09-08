import styled, { css } from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";
import usePhotoMutation from "src/hooks/file/usePhotoMutation";

import Icon from "../Icon/Icon";

const Photo = () => {
    const photo = usePhotoMutation();

    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            photo.mutate({
                appName: "question",
                file: file
            });
        }
    };

    return (
        <Label>
            <Icon icon="Camera" />
            <input
                type="file"
                id="profileImage"
                style={{ display: "none" }}
                onChange={handleImageChange}
                accept="image/x-png, image/gif, image/jpeg"
            />
        </Label>
    );
};

const Label = styled.label`
    cursor: pointer;
`;

export default Photo;

import styled, { css } from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";
import encodeFileToBase64 from "src/utils/encodeFileToBase64";

import Icon from "../Icon/Icon";

interface PhotoProp {
    setFile: any;
    setImage: any;
}

const Photo = ({ setFile, setImage }: PhotoProp) => {
    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            setFile(file);
            const data = await encodeFileToBase64(file);
            setImage(data);
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

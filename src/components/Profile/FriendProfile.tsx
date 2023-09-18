import { styled } from "styled-components";

import { colors } from "styles/theme";

interface ProfileProp {
    width: number;
    url: string;
    grayscale?: number;
}

const FriendProfile = ({ width, url, grayscale = 0 }: ProfileProp) => {
    return (
        <ProfileWrapper width={width}>
            <ProfileImg src={url} grayscale={grayscale} />
        </ProfileWrapper>
    );
};

const ProfileWrapper = styled.div<{ width: number }>`
    width: ${({ width }) => width}px;
    height: ${({ width }) => width}px;

    background: ${colors.light_gray3};

    border: 3px solid ${colors.light_qwhite};
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
`;

const ProfileImg = styled.img<{ grayscale: number }>`
    width: 100%;
    height: 100%;

    filter: ${({ grayscale }) => `grayscale(${grayscale}%)`};
`;

export default FriendProfile;

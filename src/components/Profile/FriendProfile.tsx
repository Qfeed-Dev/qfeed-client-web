import { styled } from "styled-components";

import { colors } from "styles/theme";

interface ProfileProp {
    width: number;
    url?: string;
    grayscale?: number;
}

const FriendProfile = ({ width, url, grayscale = 0 }: ProfileProp) => {
    return (
        <ProfileWrapper width={width}>
            {url && <ProfileImg src={url} grayscale={grayscale} />}
        </ProfileWrapper>
    );
};

const ProfileWrapper = styled.div<{ width: number }>`
    width: ${({ width }) => width}px;
    height: ${({ width }) => width}px;

    background: ${colors.light_gray3};

    border-radius: 50%;
    overflow: hidden;
`;

const ProfileImg = styled.img<{ grayscale: number }>`
    width: 100%;
    height: 100%;
    object-fit: cover;

    filter: ${({ grayscale }) => `grayscale(${grayscale}%)`};
`;

export default FriendProfile;

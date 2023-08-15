"use client";
import { Text } from "src/components/common/Text";
import Hr from "src/components/Hr";
import { colors } from "styles/theme";
import styled from "styled-components";
import { match } from "ts-pattern";

interface Props {}

const Filter = ({}: Props) => {
    return (
        <FilterWrapper>
            <Text typo="Subtitle2r" color="light_qwhite">
                최신순
            </Text>

            <Menu style={{ padding: "5px 0" }}>
                <Hr horizonal={true} type="primary" />
            </Menu>

            <Text typo="Subtitle2r" color="light_qwhite">
                인기순
            </Text>
        </FilterWrapper>
    );
};

const FilterWrapper = styled.div`
    width: 100%;

    display: flex;
    gap: 8px;
    border-radius: 10px;
`;

const Menu = styled.div`
    color: ${colors.light_qwhite};
`;

export default Filter;

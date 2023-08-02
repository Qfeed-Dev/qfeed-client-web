"use client";
import Hr from "src/components/Hr";
import { colors } from "src/constants/colors";
import styled from "styled-components";
import { match } from "ts-pattern";

interface Props {}

const Filter = ({}: Props) => {
    return (
        <FilterWrapper>
            <Menu>최신순</Menu>
            <Menu style={{ padding: "5px 0" }}>
                <Hr horizonal={true} />
            </Menu>

            <Menu>인기순</Menu>
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
    color: ${colors.Qwhite};
`;

export default Filter;

"use client";
import styled from "styled-components";
import { colors } from "styles/theme";
import Hr from "src/components/Hr";
import { Text } from "src/components/common/Text";

interface Props {}

const Filter = ({ isSort, setIsSort }: any) => {
    return (
        <FilterWrapper>
            <div onClick={() => setIsSort(true)}>
                <Text
                    typo={isSort ? "Subtitle2b" : "Subtitle2r"}
                    color="light_qwhite"
                >
                    최신순
                </Text>
            </div>

            <Menu style={{ padding: "5px 0" }}>
                <Hr horizonal={true} type="primary" />
            </Menu>

            <div onClick={() => setIsSort(false)}>
                <Text
                    typo={isSort ? "Subtitle2r" : "Subtitle2b"}
                    color="light_qwhite"
                >
                    인기순
                </Text>
            </div>
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

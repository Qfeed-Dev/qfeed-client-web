"use client";

import styled from "styled-components";

import { useToggle } from "src/hooks/common/useToggle";

import Flex from "src/components/common/Flex";
import ButtonQfeedSelect from "./ButtonQfeedSelect";
import FriendMakeList from "./FriendMakeList";
import FriendSelectList from "./FriendSelectList";

import { globalValue } from "src/constants/globalValue";

export default function FriendQfeedList() {
    const { value, handleChangeState } = useToggle("친구가 만든 큐피드");

    return (
        <Flex direction="column" gap={16}>
            <ButtonQfeedSelect value={value} onClick={handleChangeState} />
            {value === "친구가 만든 큐피드" ? (
                <FriendMakeList />
            ) : (
                <FriendSelectList />
            )}
        </Flex>
    );
}

const QfeedWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    height: calc(100% - ${globalValue.bottomSheetHeight});

    margin: 0 auto;
    position: relative;
`;

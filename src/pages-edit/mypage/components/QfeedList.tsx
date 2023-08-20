"use client";

import styled from "styled-components";

import { useToggle } from "src/hooks/common/useToggle";

import Flex from "src/components/common/Flex";
import ButtonQfeedSelect from "./ButtonQfeedSelect";
import MakeList from "./MakeList";
import SelectList from "./SelectList";

import { globalValue } from "src/constants/globalValue";

export default function QfeedList() {
    const { value, handleChangeState } = useToggle("내가 만든 큐피드");

    return (
        <Flex direction="column" gap={16}>
            <ButtonQfeedSelect value={value} onClick={handleChangeState} />
            {value === "내가 만든 큐피드" ? <MakeList /> : <SelectList />}
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

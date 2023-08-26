"use client";

import styled from "styled-components";

import { useToggle } from "src/hooks/common/useToggle";

import Flex from "src/components/common/Flex";
import ButtonQfeedSelect from "./ButtonQfeedSelect";
import MakeList from "./MakeList";
import SelectList from "./SelectList";

export default function QfeedList({ id }: { id: number }) {
    const { value, handleChangeState } = useToggle("내가 만든 큐피드");

    return (
        <Flex direction="column" gap={16}>
            <ButtonQfeedSelect value={value} onClick={handleChangeState} />
            {value === "내가 만든 큐피드" ? (
                <MakeList id={id} />
            ) : (
                <SelectList />
            )}
        </Flex>
    );
}

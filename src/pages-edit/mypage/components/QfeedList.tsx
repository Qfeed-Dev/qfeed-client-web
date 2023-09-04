"use client";

import Flex from "src/components/common/Flex";
import ButtonQfeedSelect from "./ButtonQfeedSelect";
import MakeList from "./MakeList";
import SelectList from "./SelectList";

import { useAppSelector } from "src/hooks/useReduxHooks";
import { Qtype } from "src/models/questions";

export default function QfeedList({ id }: { id: number }) {
    const selected: Qtype = useAppSelector((state) => state.qtype.qtype);

    return (
        <Flex direction="column" gap={16}>
            <ButtonQfeedSelect value={selected} />
            {selected === "personal" ? (
                <MakeList id={id} />
            ) : (
                <SelectList id={id} />
            )}
        </Flex>
    );
}

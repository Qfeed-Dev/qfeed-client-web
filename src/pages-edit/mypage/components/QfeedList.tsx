"use client";

import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import ButtonQfeedSelect from "./ButtonQfeedSelect";
import MakeList from "./MakeList";
import SelectList from "./SelectList";

import { useAppSelector } from "src/hooks/useReduxHooks";
import { Qtype } from "src/models/questions";

export default function QfeedList({
    id,
    isBlocking
}: {
    id: number;
    isBlocking?: boolean;
}) {
    const selected: Qtype = useAppSelector((state) => state.qtype.qtype);

    return (
        <Flex direction="column" gap={16}>
            <ButtonQfeedSelect value={selected} />
            {isBlocking ? (
                <Flex height="100%" direction="column">
                    <Text typo="Subtitle1r" color="light_gray2">
                        차단한 친구입니다.
                    </Text>
                    <Text typo="Subtitle1r" color="light_gray2">
                        친구의 OfficialQ를 보기 위해
                    </Text>
                    <Text typo="Subtitle1r" color="light_gray2">
                        차단을 해제해주세요!
                    </Text>
                </Flex>
            ) : selected === "personal" ? (
                <MakeList id={id} />
            ) : (
                <SelectList id={id} />
            )}
        </Flex>
    );
}

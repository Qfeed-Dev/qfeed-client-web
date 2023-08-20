"use client";

import styled from "styled-components";
import { colors } from "styles/theme";

import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";

import { useUserQuery } from "src/hooks/account/useUserQuery";
import { useToggle } from "src/hooks/common/useToggle";

import ButtonQfeedSelect from "./ButtonQfeedSelect";
import QfeedFrame from "src/pages-edit/home/components/QfeedFrame";

export default function QfeedList() {
    const { user } = useUserQuery();
    const { value, handleChangeState } = useToggle("내가 만든 큐피드");
    return (
        <>
            <ButtonQfeedSelect value={value} onClick={handleChangeState} />
            {/* {HomeDatas.map((data: any, idx: number) => 
            <QfeedFrame />
            } */}
        </>
    );
}

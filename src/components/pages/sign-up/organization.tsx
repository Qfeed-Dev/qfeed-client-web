"use client";
import { useRouter } from "next/navigation";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import NavigationTop from "src/components/navigations/navigation-top";
import Flex from "src/components/common/Flex";
import SelectBox from "src/components/selectbox/selectbox";
import {
    ORGANIZATION_OPTIONS,
    SCHOOL_YEAR_OPTIONS
} from "src/constants/options";
import InputLine from "src/components/inputs/input-line";

import { useInput } from "src/hooks/common/useInput";

const Organization = () => {
    const router = useRouter();
    const school = useInput();
    const department = useInput();

    return (
        <Flex direction="column" justify="start" gap={24}>
            <NavigationTop
                leftIcon={<div onClick={router.back}>왼</div>}
                title="회원 가입"
            />
            <SelectBox
                label="소속"
                options={ORGANIZATION_OPTIONS}
                defaultValue="대학생"
            />
            <InputLine
                label="학교"
                value={school.value}
                onChange={school.handleChangeInput}
                placeholder="ex) 동덕초등학교"
            />
            <InputLine
                label="학과"
                value={department.value}
                onChange={department.handleChangeInput}
                placeholder="ex) 경영학과"
            />
            <SelectBox
                label="학번"
                options={SCHOOL_YEAR_OPTIONS}
                defaultValue="20학번"
            />

            <ButtonFillLarge
                state="disabled"
                text="다음"
                onClick={() => router.push("/sign-in/complete")}
            />
        </Flex>
    );
};

export default Organization;

"use client";
import { useRouter } from "next/navigation";
import NavigationTop from "src/components/navigations/navigation-top";
import Flex from "src/components/common/Flex";
import SelectBox from "src/components/selectbox/selectbox";
import { ORGANIZATION_OPTIONS } from "src/constants/options";
import ElementarySchool from "src/components/sign-up/elementary-school";
import MidHighSchool from "src/components/sign-up/middle-high-school";
import University from "src/components/sign-up/university";
import Graduate from "src/components/sign-up/graduate";
import { useIsActive } from "src/hooks/common/useIsActive";

import { useAppSelector } from "src/hooks/useReduxHooks";

const Organization = () => {
    const router = useRouter();
    const selected = useAppSelector((state) => state.organization.selected);

    // const { isActive } = useIsActive();

    return (
        <Flex height="100%" direction="column" justify="start" gap={24}>
            <NavigationTop
                leftIcon={<div onClick={router.back}>왼</div>}
                title="회원 가입"
            />
            <SelectBox
                label="소속"
                options={ORGANIZATION_OPTIONS}
                value={selected}
            />
            {selected === "초등학생" && <ElementarySchool />}
            {selected === "중/고등학생" && <MidHighSchool />}
            {selected === "대학생" && <University />}
            {selected === "졸업생" && <Graduate />}
        </Flex>
    );
};

export default Organization;

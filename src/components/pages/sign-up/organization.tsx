"use client";
import { useRouter } from "next/navigation";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import NavigationTop from "src/components/navigations/navigation-top";
import Flex from "src/components/common/Flex";
import SelectBox from "src/components/selectbox/selectbox";
import { ORGANIZATION_OPTIONS } from "src/constants/options";
import ElementarySchool from "src/components/sign-up/elementary-school";
import MidHighSchool from "src/components/sign-up/middle-high-school";
import University from "src/components/sign-up/university";
import Graduate from "src/components/sign-up/graduate";

const Organization = () => {
    const router = useRouter();

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
            {false && <ElementarySchool />}
            {false && <MidHighSchool />}
            {false && <University />}
            {true && <Graduate />}
            <ButtonFillLarge
                state="disabled"
                text="다음"
                onClick={() => router.push("/sign-up/complete")}
            />
        </Flex>
    );
};

export default Organization;

import { useRouter } from "next/navigation";
import { useInput } from "src/hooks/common/useInput";
import { useSelect } from "src/hooks/common/useSelect";
import { useAppSelector } from "src/hooks/useReduxHooks";
import { useUserMutation } from "src/hooks/account/useUserMutation";

import InputLine from "../inputs/input-line";
import SelectBox from "../selectbox/selectbox";
import ButtonFillLarge from "../buttons/button-fill-large";

import { SCHOOL_YEAR_OPTIONS } from "src/constants/options";
import { Route } from "src/constants/Route";

const University = () => {
    const router = useRouter();
    const school = useInput();
    const department = useInput();
    const grade = useSelect("23학번");
    const selected = useAppSelector((state) => state.organization.selected);

    const { userMutation } = useUserMutation();

    const handleClickNext = () => {
        userMutation.mutate({
            schoolType: selected,
            schoolName: school.value,
            class: department.value,
            grade: grade.value
        });
        router.push(selected === "졸업생" ? Route.COMPLETE : Route.UNIVERSITY);
    };

    return (
        <>
            <InputLine
                label="학교"
                value={school.value}
                onChange={school.handleChangeInput}
                placeholder="ex) 동덕고등학교"
            />
            <InputLine
                label="학과"
                value={department.value}
                onChange={department.handleChangeInput}
                placeholder="ex) 경영학과"
            />
            <SelectBox
                label="학번"
                value={grade.value}
                setState={grade.handleSelect}
                options={SCHOOL_YEAR_OPTIONS}
            />
            <ButtonFillLarge
                state={school.value ? "active" : "disabled"}
                text="다음"
                onClick={handleClickNext}
            />
        </>
    );
};

export default University;

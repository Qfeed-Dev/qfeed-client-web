import { useRouter } from "next/navigation";
import { useInput } from "src/hooks/common/useInput";
import { useAppSelector } from "src/hooks/useReduxHooks";
import { useUserMutation } from "src/hooks/account/useUserMutation";

import InputLine from "../inputs/input-line";
import ButtonFillLarge from "../buttons/button-fill-large";

import { Route } from "src/constants/Route";

const MidHighSchool = () => {
    const router = useRouter();
    const school = useInput();
    const selected = useAppSelector((state) => state.organization.selected);

    const { userMutation } = useUserMutation();

    const handleClickNext = () => {
        userMutation.mutate({
            schoolType: selected,
            schoolName: school.value
        });
        router.push(selected === "졸업생" ? Route.COMPLETE : Route.MIDHIGH);
    };

    return (
        <>
            <InputLine
                label="학교"
                value={school.value}
                onChange={school.handleChangeInput}
                placeholder="ex) 동덕고등학교"
            />
            <ButtonFillLarge
                state={school.value ? "active" : "disabled"}
                text="다음"
                onClick={handleClickNext}
            />
        </>
    );
};

export default MidHighSchool;

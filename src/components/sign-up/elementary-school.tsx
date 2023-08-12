import { useRouter } from "next/navigation";
import { useInput } from "src/hooks/common/useInput";

import InputLine from "../inputs/input-line";
import ButtonFillLarge from "../buttons/button-fill-large";
import { Route } from "src/constants/Route";

import { useUserMutation } from "src/hooks/account/useUserMutation";
import { useAppSelector } from "src/hooks/useReduxHooks";

const ElementarySchool = () => {
    const router = useRouter();
    const school = useInput();
    const selected = useAppSelector((state) => state.organization.selected);

    const { userMutation } = useUserMutation();

    const handleClickNext = () => {
        userMutation.mutate({
            schoolType: selected,
            schoolName: school.value
        });
        router.push(Route.COMPLETE);
    };

    return (
        <>
            <InputLine
                label="학교"
                value={school.value}
                onChange={school.handleChangeInput}
                placeholder="ex) 동덕초등학교"
            />
            <ButtonFillLarge
                state={school.value ? "active" : "disabled"}
                text="다음"
                onClick={handleClickNext}
            />
        </>
    );
};

export default ElementarySchool;

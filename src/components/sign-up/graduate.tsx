import SelectBox from "../selectbox/selectbox";
import { GRADUATE_OPTIONS } from "src/constants/options";
import University from "./university";
import MidHighSchool from "./middle-high-school";
import { useAppSelector } from "src/hooks/common/useReduxHooks";

const Graduate = () => {
    const selected = useAppSelector((state) => state.organization.graduate);

    return (
        <>
            <SelectBox
                label="졸업 학교"
                options={GRADUATE_OPTIONS}
                value={selected}
            />
            {selected === "대학교" ? <University /> : <MidHighSchool />}
        </>
    );
};

export default Graduate;

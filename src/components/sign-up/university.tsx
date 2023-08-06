import { useInput } from "src/hooks/common/useInput";
import InputLine from "../inputs/input-line";
import SelectBox from "../selectbox/selectbox";
import { SCHOOL_YEAR_OPTIONS } from "src/constants/options";

const University = () => {
    const school = useInput();
    const department = useInput();
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
                options={SCHOOL_YEAR_OPTIONS}
                defaultValue="23학번"
            />
        </>
    );
};

export default University;

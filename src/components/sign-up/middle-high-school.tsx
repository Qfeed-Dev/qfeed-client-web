import InputLine from "../inputs/input-line";
import { useInput } from "src/hooks/common/useInput";

const MidHighSchool = () => {
    const school = useInput();
    return (
        <InputLine
            label="학교"
            value={school.value}
            onChange={school.handleChangeInput}
            placeholder="ex) 동덕고등학교"
        />
    );
};

export default MidHighSchool;

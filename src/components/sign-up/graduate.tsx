import SelectBox from "../selectbox/selectbox";
import { GRADUATE_OPTIONS } from "src/constants/options";
import University from "./university";

const Graduate = () => {
    return (
        <>
            <SelectBox
                label="졸업 학교"
                options={GRADUATE_OPTIONS}
                defaultValue="대학교"
            />
            {true && <University />}
        </>
    );
};

export default Graduate;

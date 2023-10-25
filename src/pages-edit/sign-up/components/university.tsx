import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useInput } from "src/hooks/common/useInput";
import { useSelect } from "src/hooks/common/useSelect";
import { useAppSelector } from "src/hooks/useReduxHooks";
import { useUserMutation } from "src/hooks/account/useUserMutation";
import useGetUnivQuery from "src/hooks/school/useGetUnivQuery";
import useGetMajorQuery from "src/hooks/school/useGetMajorQuery";
import { useUserQuery } from "src/hooks/account/useUserQuery";

import Flex from "src/components/common/Flex";
import InputLine from "src/components/inputs/input-line";
import SelectBox from "src/components/selectbox/selectbox";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import Option from "src/components/selectbox/Options";

import { SCHOOL_YEAR_OPTIONS } from "src/constants/options";
import { Route } from "src/constants/Route";

const University = () => {
    const router = useRouter();
    const { user } = useUserQuery();

    const school = useInput(user?.schoolName);
    const department = useInput(user?.class);
    const grade = useSelect("23학번");
    const selected = useAppSelector((state) => state.organization.selected);

    const { userMutation } = useUserMutation();
    const filteredSchool = useGetUnivQuery(school.value);
    const filteredMajor = useGetMajorQuery(department.value);

    useEffect(() => {
        filteredSchool.refetch();
    }, [school.value]);

    useEffect(() => {
        filteredMajor.refetch();
    }, [department.value]);

    const searchSchool = useCallback(() => {
        const filteredSchoolInfo =
            filteredSchool.data?.dataSearch.content && school.value
                ? filteredSchool.data?.dataSearch.content.map(
                      (schoolInfo: any) => {
                          return {
                              name: schoolInfo.schoolName,
                              value:
                                  schoolInfo.schoolName + schoolInfo.campusName
                          };
                      }
                  )
                : null;

        return filteredSchoolInfo;
    }, [filteredSchool]);

    const searchMajor = useCallback(() => {
        const filteredMajorInfo =
            filteredMajor.data?.dataSearch.content && department.value
                ? filteredMajor.data?.dataSearch.content.map(
                      (schoolInfo: any) => {
                          return {
                              name: schoolInfo.mClass,
                              value: schoolInfo.majorSeq
                          };
                      }
                  )
                : null;

        return filteredMajorInfo;
    }, [filteredMajor]);

    const handleClickNext = () => {
        userMutation.mutate({
            schoolType: selected,
            schoolName: school.value,
            class: department.value,
            grade: grade.value
        });
        // router.push(selected === "졸업생" ? Route.COMPLETE : Route.UNIVERSITY);
        router.push(Route.COMPLETE);
    };

    return (
        <>
            <Flex direction="column">
                <InputLine
                    label="학교"
                    value={school.value}
                    onChange={school.handleChangeInput}
                    placeholder="ex) 홍익대학교"
                />
                {filteredSchool.data?.dataSearch.content && searchSchool() && (
                    <Option
                        options={searchSchool()}
                        setState={school.setValue}
                    />
                )}
            </Flex>
            <Flex direction="column">
                <InputLine
                    label="학과"
                    value={department.value}
                    onChange={department.handleChangeInput}
                    placeholder="ex) 경영학과"
                />
                {filteredMajor.data?.dataSearch.content && searchMajor() && (
                    <Option
                        options={searchMajor()}
                        setState={department.setValue}
                    />
                )}
            </Flex>

            <SelectBox
                label="학번"
                value={grade.value}
                setState={grade.handleSelect}
                options={SCHOOL_YEAR_OPTIONS}
            />

            <ButtonFillLarge
                state={
                    school.value && department.value && grade.value
                        ? "active"
                        : "disabled"
                }
                text="다음"
                onClick={handleClickNext}
            />
        </>
    );
};

export default University;

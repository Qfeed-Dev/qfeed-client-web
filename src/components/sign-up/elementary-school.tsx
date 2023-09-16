import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useInput } from "src/hooks/common/useInput";

import InputLine from "../inputs/input-line";
import ButtonFillLarge from "../buttons/button-fill-large";
import Option from "../selectbox/Options";
import Flex from "../common/Flex";

import { useUserMutation } from "src/hooks/account/useUserMutation";
import { useAppSelector } from "src/hooks/useReduxHooks";
import useGetSchoolQuery from "src/hooks/school/useGetSchoolQuery";

import { Route } from "src/constants/Route";

const ElementarySchool = () => {
    const router = useRouter();
    const school = useInput();
    const filteredSchool = useGetSchoolQuery(school.value);
    const selected = useAppSelector((state) => state.organization.selected);

    const { userMutation } = useUserMutation();

    useEffect(() => {
        filteredSchool.refetch();
    }, [school.value]);

    const searchSchool = useCallback(() => {
        const filteredSchoolInfo =
            filteredSchool.data?.schoolInfo && school.value
                ? filteredSchool.data?.schoolInfo[1].row
                      .filter(
                          (schoolInfo: any) =>
                              schoolInfo.SCHUL_KND_SC_NM === "초등학교"
                      )
                      .map((schoolInfo: any) => {
                          return {
                              name: schoolInfo.SCHUL_NM,
                              value: schoolInfo.SD_SCHUL_CODE
                          };
                      })
                : null;

        return filteredSchoolInfo;
    }, [filteredSchool]);

    const handleClickNext = () => {
        userMutation.mutate({
            schoolType: selected,
            schoolName: school.value
        });
        router.push(Route.COMPLETE);
    };

    return (
        <>
            <Flex direction="column">
                <InputLine
                    label="학교"
                    value={school.value}
                    onChange={school.handleChangeInput}
                    placeholder="ex) 동덕초등학교"
                />
                {filteredSchool.data?.schoolInfo && searchSchool() && (
                    <Option
                        options={searchSchool()}
                        setState={school.setValue}
                    />
                )}
            </Flex>
            <ButtonFillLarge
                state={school.value ? "active" : "disabled"}
                text="다음"
                onClick={handleClickNext}
            />
        </>
    );
};

export default ElementarySchool;

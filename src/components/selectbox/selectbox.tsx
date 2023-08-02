"use client";

import styled from "styled-components";
import { useState } from "react";
import Flex from "../common/Flex";
import Text from "../common/Text";
import { colors } from "styles/theme";
import { useAppDispatch } from "src/hooks/useReduxHooks";
import {
    changeGraduate,
    changeOrganization
} from "src/reducer/slices/organization/organizationSlice";

export interface SelectBoxProps {
    label: string;
    options: any;
    defaultValue: string;
}

const SelectBox = (props: SelectBoxProps) => {
    const [open, setOpen] = useState<Boolean>(false);
    const [currentValue, setCurrentValue] = useState(props.defaultValue);
    const dispatch = useAppDispatch();

    return (
        <Flex direction="column" align="start" gap={8}>
            <Text typo="Subtitle1r">{props.label}</Text>
            <Select onClick={() => setOpen(!open)}>
                <Selected justify="space-between">
                    <Text typo="Subtitle1r">{currentValue}</Text>
                    <div>down</div>
                </Selected>
                <Options>
                    {open &&
                        props.options.map((option: any) => (
                            <Option
                                key={option.value}
                                onClick={() => {
                                    setCurrentValue(option.name);
                                    if (props.label === "소속") {
                                        dispatch(
                                            changeOrganization({
                                                type: "organization",
                                                value: option.name
                                            })
                                        );
                                    } else if (props.label === "졸업 학교") {
                                        dispatch(
                                            changeGraduate({
                                                type: "organization",
                                                value: option.name
                                            })
                                        );
                                    }
                                }}
                            >
                                <Text typo="Subtitle1r">{option.name}</Text>
                            </Option>
                        ))}
                </Options>
            </Select>
        </Flex>
    );
};

const Select = styled.div`
    width: 100%;
`;

const Selected = styled(Flex)`
    width: 100%;
    padding: 0.5rem 0;
    color: ${colors.light_qwhite};

    border-bottom: 1.5px solid ${colors.light_gray3};
`;

const Options = styled.ul`
    border-radius: 0 0 10px 10px;
    overflow: hidden;
`;

const Option = styled.li`
    width: 100%;
    padding: 1rem;
    background: ${colors.light_gray3};
`;

export default SelectBox;

"use client";

import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Flex from "../common/Flex";
import Text from "../common/Text";
import { colors } from "styles/theme";
import { useAppDispatch } from "src/hooks/useReduxHooks";
import {
    changeGraduate,
    changeOrganization
} from "src/reducer/slices/organization/organizationSlice";
import { motion } from "framer-motion";
import { dropdown } from "src/constants/animation";

export interface SelectBoxProps {
    label: string;
    options: any;
    value?: string;
    defaultValue?: string;
}

const SelectBox = (props: SelectBoxProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [currentValue, setCurrentValue] = useState(
        props.defaultValue || props.value
    );
    const dispatch = useAppDispatch();

    return (
        <Flex direction="column" align="start" gap={8}>
            <Text typo="Subtitle1r">{props.label}</Text>
            <Select onClick={() => setOpen(!open)}>
                <Selected justify="space-between">
                    <Text typo="Subtitle1r">{currentValue}</Text>
                    <div>down</div>
                </Selected>
                <Options
                    initial="hide"
                    animate={open ? "show" : "hide"}
                    variants={dropdown}
                >
                    {props.options.map((option: any) => (
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
    position: relative;
`;

const Selected = styled(Flex)`
    width: 100%;
    padding: 0.5rem 0;
    color: ${colors.light_qwhite};

    border-bottom: 1.5px solid ${colors.light_gray3};
`;

const Options = styled(motion.ul)`
    max-height: 212px;
    border-radius: 0 0 10px 10px;
    overflow: scroll;
`;

const Option = styled.li`
    width: 100%;
    padding: 1rem;
    background: ${colors.light_gray3};
`;

export default SelectBox;

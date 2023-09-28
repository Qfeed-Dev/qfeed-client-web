"use client";

import styled from "styled-components";
import { useState } from "react";
import Flex from "../common/Flex";
import Text from "../common/Text";
import { colors } from "styles/theme";
import { motion } from "framer-motion";
import { dropdown } from "src/constants/animation";

export interface OptionProps {
    options: any;
    value?: string;
    setState?: any;
    defaultValue?: string;
}

const Option = (props: OptionProps) => {
    const [open, setOpen] = useState<boolean>(true);
    return (
        <Flex direction="column" align="start" gap={8}>
            <Options
                initial="hide"
                animate={open ? "show" : "hide"}
                variants={dropdown}
            >
                {props.options.map((option: any) => (
                    <OptionItem
                        key={option.value}
                        onClick={() => {
                            props.setState(option.name);
                            setOpen(!open);
                        }}
                    >
                        <Text typo="Subtitle1r">{option.name}</Text>
                    </OptionItem>
                ))}
            </Options>
        </Flex>
    );
};

const Options = styled(motion.ul)`
    width: 100%;
    max-height: 212px;
    border-radius: 0 0 10px 10px;
    overflow: scroll;
`;

const OptionItem = styled.li`
    width: 100%;
    padding: 1rem;
    background: ${colors.light_gray3};
`;

export default Option;

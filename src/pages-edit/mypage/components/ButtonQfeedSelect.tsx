"use client";

import styled from "styled-components";
import Text from "src/components/common/Text";
import Flex from "src/components/common/Flex";
import { colors, theme } from "styles/theme";

import { useAppDispatch } from "src/hooks/common/useReduxHooks";
import { changeQType } from "src/reducer/slices/qtype/qtypeSlice";
import { Qtype } from "src/models/questions";

export type ButtonState = "active" | "disabled";

const TEXT_COLOR = {
    default: {
        active: theme.colors.light_qblack,
        disabled: theme.colors.light_qwhite
    }
};

const BUTTON_COLOR = {
    default: {
        active: theme.colors.light_qwhite,
        disabled: ""
    }
};

const ButtonQfeedSelect = ({ value }: { value: Qtype }) => {
    const dispatch = useAppDispatch();
    return (
        <SelectWrapper gap={24}>
            <ButtonWrapper>
                <Input type="qfeed" id="personal" />
                <Input type="qfeed" id="official" />
                <Button
                    id="personal"
                    state={value === "personal" ? "active" : "disabled"}
                    onClick={() =>
                        dispatch(
                            changeQType({
                                value: "personal"
                            })
                        )
                    }
                >
                    <Text typo="Subtitle2b">Personal Q</Text>
                </Button>
                <Button
                    id="official"
                    state={value === "official" ? "active" : "disabled"}
                    onClick={() =>
                        dispatch(
                            changeQType({
                                value: "official"
                            })
                        )
                    }
                >
                    <Text typo="Subtitle2b">Official Q</Text>
                </Button>
            </ButtonWrapper>
        </SelectWrapper>
    );
};

const SelectWrapper = styled(Flex)`
    /* width: 100vw;
    max-width: 600px;
    padding: 0 1rem; */
    border-bottom: 1px solid ${colors.light_qwhite};
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;

    border: 1px solid ${colors.light_qwhite};
    border-radius: 10px 10px 0 0;
    overflow: hidden;
`;

const Button = styled.label<{
    state: ButtonState;
}>`
    width: 100%;
    padding: 0.88rem 1.25rem;

    text-align: center;
    color: ${({ state }) => TEXT_COLOR.default[state]};
    background: ${({ state }) => BUTTON_COLOR.default[state]};

    white-space: nowrap;
`;

const Input = styled.input`
    width: 0;
`;

export default ButtonQfeedSelect;

"use client";
import { useRouter } from "next/navigation";
import { forwardRef } from "react";
import { colors } from "styles/theme";
import styled from "styled-components";
import { Text } from "../common/Text";
import Report from "../Report";
import Spacing from "../Spacing";
import Icon from "../Icon";

const BackTitle = forwardRef(function Div(
    { children, onClick, type = "default", ...props }: any,
    ref
) {
    const router = useRouter();
    const handleClickBack = () => {
        router.back();
    };

    return (
        <>
            <Spacing size={50} />
            <BackTitleWrapper>
                <BackTitleInner>
                    <Menu onClick={handleClickBack} style={{ display: "flex" }}>
                        <Icon icon="LeftArrow" width={24} height={24} />
                        <Text typo="Headline1b" color="light_qwhite">
                            {props.text}
                        </Text>
                    </Menu>
                    {type !== "default" ? (
                        <>
                            {type === "slide" ? (
                                <Menu>
                                    <Text
                                        typo="Subtitle2b"
                                        color="light_qwhite"
                                    >
                                        {props.currentIdx + 1}/{props.count}
                                    </Text>
                                </Menu>
                            ) : (
                                <div
                                    style={{ width: "100%", margin: "0 16px" }}
                                >
                                    {children}
                                </div>
                            )}
                            <Menu>
                                <Report type={props.reportType} />
                            </Menu>
                        </>
                    ) : null}
                </BackTitleInner>
            </BackTitleWrapper>
        </>
    );
});

const BackTitleWrapper = styled.div`
    width: 100%;
    height: 50px;

    position: absolute;
    top: 0;
    left: 0;

    background-color: transparent;
`;

const BackTitleInner = styled.div`
    max-width: 600px;
    height: 50px;
    margin: auto;
    padding: 0 16px;

    display: flex;
    justify-content: space-between;
    color: ${colors.light_qwhite};
`;

const Menu = styled.div`
    //   width: 40px;
    min-width: 24px;
    margin: auto 0;
    text-align: center;
`;

export default BackTitle;

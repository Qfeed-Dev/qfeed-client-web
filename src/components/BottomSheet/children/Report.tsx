"use client";
import styled from "styled-components";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { colors } from "styles/theme";
import { usePathname } from "next/navigation";
import { sendDiscordMessage } from "src/apis/discord";
import { useAppDispatch } from "src/hooks/useReduxHooks";
import { changeAction } from "src/reducer/slices/bottomSheet/bottomSheetSlice";

interface Props {}

const ReportDatas = [
    "스팸",
    "성적 행위",
    "혐오 발언",
    "거짓 정보",
    "폭력",
    "사기",
    "따돌림",
    "자살 자해",
    "지식재산권 침해",
    "기타문제"
];

const Report = ({}: Props) => {
    const pathName = usePathname();
    const dispatch = useAppDispatch();

    const handleClickReport = async (reason: string) => {
        const id = pathName.split("question/")[1];
        await sendDiscordMessage(
            `> **[게시글 신고]**
            > 
            > 게시글 Id: ${id}
            > 신고사유: ${reason}`
        );
        return null;
    };
    return (
        <Flex height="100%" direction="column">
            <Menu>
                <Text typo="Subtitle2b">신고하기</Text>
            </Menu>
            <Flex height="100%" direction="column">
                {ReportDatas.map((data: string, idx: number) => (
                    <Menu
                        key={idx}
                        $border
                        onClick={() => {
                            handleClickReport(data);
                            dispatch(
                                changeAction({
                                    type: "bottomSheet",
                                    value: { on: false }
                                })
                            );
                        }}
                    >
                        <Text typo="Subtitle2r">{data}</Text>
                    </Menu>
                ))}
            </Flex>
        </Flex>
    );
};

const Menu = styled.div<{ $border?: boolean }>`
    width: 100%;
    padding: 1rem 0;

    display: flex;
    justify-content: center;

    border-top: ${({ $border }) =>
        $border && `1px solid ${colors.line_black_5}`};
`;

export default Report;

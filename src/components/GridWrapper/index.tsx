import styled from "styled-components";
import { motion } from "framer-motion";

import Flex from "src/components/common/Flex";

import QfeedFrame from "src/pages-edit/home/components/QfeedFrame";
import { enterComponentVariants } from "src/constants/animation";

const QuestionGrid = ({
    questions,
    detail = false,
    colorStart = 1
}: {
    questions: any;
    detail?: boolean;
    colorStart?: number;
}) => {
    return (
        <GridWrapper
            variants={enterComponentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {questions.map((data: any, idx: number) => (
                <QfeedFrame
                    key={idx}
                    idx={data.id}
                    colorIdx={idx + colorStart}
                    data={data}
                    detail={detail}
                />
            ))}
        </GridWrapper>
    );
};

const GridWrapper = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export default QuestionGrid;

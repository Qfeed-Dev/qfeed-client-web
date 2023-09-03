import styled from "styled-components";
import { motion } from "framer-motion";

import Flex from "src/components/common/Flex";

import QfeedFrame from "src/pages-edit/home/components/QfeedFrame";
import { enterComponentVariants } from "src/constants/animation";
import { QuestionItem, Questions } from "src/models/questions";
import { useEffect, useState } from "react";

const QuestionGrid = ({
    questions,
    detail = false
}: {
    questions: Questions;
    detail?: boolean;
}) => {
    const [sortedData, setSortedData] = useState<QuestionItem[] | undefined>(
        undefined
    );
    useEffect(() => {
        setSortedData(questions.data.reverse());
    }, []);

    return (
        <GridWrapper
            variants={enterComponentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <QFeedGridOdd direction="column" gap={12}>
                {sortedData
                    ?.filter((data: any, idx: number) => idx % 2 === 0)
                    .map((data: any, idx: number) => (
                        <QfeedFrame
                            key={idx}
                            idx={data.id}
                            colorIdx={idx}
                            data={data}
                            detail={detail}
                        />
                    ))}
            </QFeedGridOdd>
            <QFeedGridEven direction="column" gap={12}>
                {sortedData
                    ?.filter((data: any, idx: number) => idx % 2 === 1)
                    .map((data: any, idx: number) => (
                        <QfeedFrame
                            key={idx}
                            idx={data.id}
                            colorIdx={idx + 4}
                            data={data}
                            detail={detail}
                        />
                    ))}
            </QFeedGridEven>
        </GridWrapper>
    );
};

const GridWrapper = styled(motion.div)`
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: start;
`;

const QFeedGridOdd = styled(Flex)`
    width: 100%;
`;

const QFeedGridEven = styled(Flex)`
    width: 100%;
`;

export default QuestionGrid;

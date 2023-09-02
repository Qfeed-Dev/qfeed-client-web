import OpenFriendChat from "./OpenFriendChat";
import styled from "styled-components";
import useGetFollowers from "src/hooks/questions/useGetFollowers";
import useGetQuestionFriend from "src/hooks/questions/useGetQuestionFriend";

export default function FriendList() {
    const { questionFriend } = useGetQuestionFriend();
    // const { data } = useGetFollowers();

    return (
        <FriendWrapper>
            {/* maybe its better to show follow list here? */}
            {/* {data?.data?.map((data: any, idx: number) => { */}
            {questionFriend?.accountFetch?.map((data: any, idx: number) => {
                return <OpenFriendChat key={idx} idx={idx} data={data} />;
            })}
        </FriendWrapper>
    );
}

const FriendWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 14px 12px;
`;

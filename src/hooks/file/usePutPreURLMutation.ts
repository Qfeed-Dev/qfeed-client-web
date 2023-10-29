import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserMutation } from "../account/useUserMutation";
import fileAPI from "src/apis/file";
import { photoKeys } from "src/constants/queryKeys/fileKeys";

const usePutPreURLMutation = () => {
    const queryClient = useQueryClient();
    const { userMutation } = useUserMutation();

    const { mutate } = useMutation(
        (url: {
            url: { presignedUrl: string; imageUrl: string };
            file: File;
        }) => fileAPI.putPresignedURL(url.url.presignedUrl, url.file),
        {
            onSuccess: (data, url) => {
                userMutation.mutate({
                    profileImage: url.url.imageUrl
                });
            },
            onError: () => {}
        }
    );
    return { mutate };
};

export default usePutPreURLMutation;

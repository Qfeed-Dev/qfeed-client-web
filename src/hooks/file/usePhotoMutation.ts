import { useMutation, useQueryClient } from "@tanstack/react-query";
import fileAPI from "src/apis/file";
import { photoKeys } from "src/constants/queryKeys/fileKeys";

const usePhotoMutation = () => {
    const queryClient = useQueryClient();

    const { mutateAsync } = useMutation(
        (photo: { appName: string; file: File }) =>
            fileAPI.createPresignedURL({
                appName: photo.appName,
                fileName: photo.file.name,
                fileType: photo.file.type
            }),
        {
            onSuccess: (data, photo) => {
                fileAPI.putPresignedURL(data.presignedUrl, photo.file);
                queryClient.invalidateQueries(photoKeys.all);
            },
            onError: () => {}
        }
    );
    return { mutateAsync };
};

export default usePhotoMutation;

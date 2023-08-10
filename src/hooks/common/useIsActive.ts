import { useCallback } from "react";

export const useIsActive = (object: Object) => {
    const isActive = useCallback(
        (object: any) => {
            const result = Object.values(object).every(
                (objectItem) =>
                    objectItem && objectItem !== null && objectItem !== ""
            );
            return result;
        },
        [object]
    );
    return { isActive };
};

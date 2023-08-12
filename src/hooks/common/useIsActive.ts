export const useIsActive = (object: Object | undefined) => {
    const result =
        object &&
        Object.values(object).every(
            (objectItem) =>
                // objectItem &&
                objectItem !== ""
        );

    return result;
};

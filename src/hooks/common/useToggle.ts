import { useState, useEffect } from "react";

export const useToggle = (initialState: string) => {
    const [value, setValue] = useState<string>(initialState);
    useEffect(() => setValue(initialState), [initialState]);

    const handleChangeState = (event: any) => {
        setValue(event.target.id);
    };

    return { value, handleChangeState };
};

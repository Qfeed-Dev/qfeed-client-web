import { useState, ChangeEvent, useEffect } from "react";

export const useInput = (initialState?: string) => {
    const [value, setValue] = useState<string>(initialState || "");
    useEffect(() => setValue(initialState || ""), [initialState]);

    const reset = () => {
        setValue("");
    };

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            reset();
        } else {
            setValue(event.target.value);
        }
    };
    return { value, handleChangeInput, reset };
};

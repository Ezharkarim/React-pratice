import { useState } from "react";

export const useToggle = (initalVal = false) => {
    const [state, setState] = useState(initalVal);

    const toggle = () => {
        setState((prev) => !prev);
    };

    return [state, toggle];
};
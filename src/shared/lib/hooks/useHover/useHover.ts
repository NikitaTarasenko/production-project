import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}
type UseHoverResult = [boolean, UseHoverBind];

export const useHover = () => {
    const [isHover, SetIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        SetIsHover(true);
    }, []);
    const onMouseLeave = useCallback(() => {
        SetIsHover(false);
    }, []);

    return useMemo(
        () => [isHover, { onMouseEnter, onMouseLeave }],
        [isHover, onMouseEnter, onMouseLeave],
    );
};

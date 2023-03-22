import { useRef, useEffect } from 'react';
import { select } from 'd3';

export const useD3 = (renderMap, dependencies) => {
    const ref = useRef();

    useEffect(() => {
        renderMap(select(ref.current));
        return () => { };
    }, [renderMap, dependencies]);
    return ref;
}
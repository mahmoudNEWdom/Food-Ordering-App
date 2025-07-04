import {unstable_cache as nextCache} from 'next/cache';
import {cache as ReactCache} from 'react';

type Callback = (...args: any[]) => Promise<any> | any;

export const cache = function <T extends Callback> (
    cb : T,
    keyParts : string[],
    options: {
        revalidate?: number | false;
        tags?: string[];
    }
) {
    return nextCache(ReactCache(cb),keyParts,options);
}
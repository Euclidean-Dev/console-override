type Methods = 'debug' | 'error' | 'info' | 'log' | 'warn' | 'dir' | 'dirxml' | 'table' | 'trace' | 'group' | 'groupCollapsed' | 'groupEnd' | 'clear' | 'count' | 'countReset' | 'assert' | 'profile' | 'profileEnd' | 'time' | 'timeLog' | 'timeEnd' | 'timeStamp' | 'context' | 'memory';
export interface Configuration {
    exclude?: Methods[];
    enabled?: boolean;
    clearOnLoad?: boolean;
    debugKey?: string;
}
export declare const ConsoleOverride: {
    configure: (options?: Configuration) => void;
};

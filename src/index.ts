/* eslint-disable no-console */

interface ConsoleOverride extends Console {
  [key: string]: Function;
}
type Methods =
  'debug' |
  'error' |
  'info' |
  'log' |
  'warn' |
  'dir' |
  'dirxml' |
  'table' |
  'trace' |
  'group' |
  'groupCollapsed' |
  'groupEnd' |
  'clear' |
  'count' |
  'countReset' |
  'assert' |
  'profile' |
  'profileEnd' |
  'time' |
  'timeLog' |
  'timeEnd' |
  'timeStamp' |
  'context' |
  'memory';
  
export interface Configuration {
  exclude?: Methods[],
  enabled?: boolean,
  clearOnLoad?: boolean,
  debugKey?: string,
}

export const ConsoleOverride = {
  configure: (options: Configuration = { enabled: true }) => {
    if (!options.enabled || (options.debugKey && readLocalStorageKey(options.debugKey))) {
      return;
    }
    clearOnLoad(options);
    overrideConsoleMethods(options.exclude);
  }
};

const readLocalStorageKey = (key: string): boolean => {
  return localStorage.getItem(key) === 'true';
}

const clearOnLoad = (options: Configuration) => {
  if (options.clearOnLoad) {
    setTimeout(console.clear.bind(console));
  }
}

const overrideConsoleMethods = (methodsToExclude: Methods[] = []) => {
  const excludedMethods = new Set(methodsToExclude);
  for (const [property, type] of Object.entries<Function>(console as ConsoleOverride)) {
    if (type && typeof type === 'function' && !excludedMethods.has(property as Methods)) {
      (console as ConsoleOverride)[property] = () => { null; };
    }
  }
}
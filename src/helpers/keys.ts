export const getKeys = <T extends Record<any, any>>(obj: T) => Object.keys(obj) as Array<keyof typeof obj>;
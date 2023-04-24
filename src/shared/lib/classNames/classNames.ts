export type Modes = Record<string, boolean | string | undefined>

export function classNames(
    cls: string,
    mods:Modes = {},
    additional: Array<string | undefined> = [],
):string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([classNames, value]) => Boolean(value))
            .map(([classNames]) => classNames),
    ].join(' ');
}

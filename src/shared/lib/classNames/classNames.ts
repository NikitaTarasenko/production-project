type Mode = Record<string, boolean | string>

export function classNames(
    cls: string,
    mods:Mode = {},
    additional: string[] = [],
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

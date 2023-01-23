
type Mode = Record<string, boolean | string>


export function classNames(cls: string, mods:Mode, additional: string[]):string{

    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([classNames,value]) => Boolean(value))
            .map(([classNames])=> classNames)
    ].join(' ') 
}

 
type Mods = Record<string, string | boolean>;

export function classNames(cls: string, mods: Mods = {}, adds: Array<string> = []): string {
    return [
        cls,
        ...adds.filter(Boolean),
        ...Object.entries(mods)
            .reduce((acc, [key, value]) => {
                if (Boolean(value)) {
                    return [...acc, key]
                }

                return acc;
            }, [])
    ].join(' ');
}
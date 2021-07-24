import { BracketsDefinition, CheckBracketsFn } from '~/src/@types';

export function checkBracketsFactory(definitions: readonly BracketsDefinition[]): CheckBracketsFn {
    const closeToOpenBracketsMap = new Map<string, string>();

    for (const [open, close] of definitions) {
        closeToOpenBracketsMap.set(close, open);
    }

    const openBrackets = new Set(closeToOpenBracketsMap.values());
    const closeBrackets = new Set(closeToOpenBracketsMap.keys());

    validate(openBrackets, closeBrackets);

    return function checkBrackets(str: string): boolean {
        const stack: string[] = [];

        for (const char of str) {
            if (openBrackets.has(char)) {
                stack.push(char);
            } else if (closeBrackets.has(char)) {
                if (closeToOpenBracketsMap.get(char) !== stack.pop()) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    };
}

function validate(openBrackets: Set<string>, closeBrackets: Set<string>) {
    const intersection = [...openBrackets].filter(val => closeBrackets.has(val));

    if (intersection.length) {
        const intersectionString = intersection.map(val => `'${val}'`).join(',')
        throw new Error(`Invalid arguments. Intersection in open and close brackets sets: ${intersectionString}`);
    }
}

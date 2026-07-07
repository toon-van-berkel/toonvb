export function formatResult(value: unknown) {
    if (value instanceof Error) {
        return value.message;
    }

    if (typeof value === 'string') {
        return value;
    }

    return JSON.stringify(value);
}
export function isEmpty(collection: any[] | null | undefined) {
    return collection == null || collection.length === 0;
}

export function groupById<T>(items: T[], idKey: keyof T): Record<string, T> {
    if (isEmpty(items)) {
        return {};
    }
    return items.reduce((prev, current) => {
        const id = new String(current[idKey]).toString();
        prev[id] = current;
        return prev;
    }, {} as Record<string, T>);
}
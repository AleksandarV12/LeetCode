function prefixCount(words: string[], pref: string): number {
    const hasPrefix = words.filter(word => word.startsWith(pref));
    return hasPrefix.length;
};
function countPrefixSuffixPairs(words: string[]): number {
    const isPrefixAndSuffix = (str1:string,str2:string): boolean => {
        return str2.startsWith(str1) && str2.endsWith(str1);
    }

    let counter = 0;
    for(let i =0; i<words.length;i++){
        for(let j = i+1; j<words.length;j++){
            if(isPrefixAndSuffix(words[i],words[j])){
                counter++;
            }
        }
    }
    return counter;
};
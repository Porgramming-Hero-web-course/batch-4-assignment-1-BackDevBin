function countWordOccurrences(sentence: string, word: string): number {
    
    let cnt = 0;
    const lowerWord = word.toLowerCase();
    const lowerSen = sentence.toLowerCase();
    const conWords = lowerSen.split(" ");

    conWords.map(wrd =>{
        if(wrd === lowerWord)
            cnt++;
    })

    return cnt;
}

countWordOccurrences("I love You You You", "You");
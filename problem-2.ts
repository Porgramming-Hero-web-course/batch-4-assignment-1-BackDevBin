function removeDuplicates(arr: number[]): number[] {
    const uniArr: number[] = [];
    arr.map(element =>{
        if (!uniArr.includes(element)) {
            uniArr.push(element);
        }
    })
    return uniArr;
}


removeDuplicates([10,20,20,10,40,40,50]); 
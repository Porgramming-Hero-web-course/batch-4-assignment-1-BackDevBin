function sumArray(arr: number[]): number {
    let sum : number = 0;
    arr.map(element => sum += element);
    return sum;
}

sumArray([2,4,6,8,10]);
**********Blog 1**********

In typeScript, union and intersection are used to describe how different value can be combined or merged.

Union Types:
 A value that can be any one of several types is a union type. We use the | symbol for Union.its works like or.

 Code Example:

 let input : number | string;  
input = "Hello";   
input = 42;        
input = true;

Code Explain:

Variable input will be number or string.For this Reason first two input are valid and last one show error.

Intersection Types:
An intersection type combines multiple types into one.Meaning all type need satisfy.We use the & symbol to combine types.

Code Example:

type input1 ={name: string} 
type input2 ={Salary: number} 

let profile : input1 & input2 ={
    name: "Tishan",
    Salary: 80000
}

Code Explain:

If profile does not exist name and salary, it show error beacuse we Intersect input1 & input2.



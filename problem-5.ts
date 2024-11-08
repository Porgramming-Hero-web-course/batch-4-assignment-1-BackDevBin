const person = { 
    name: "Alice",
    age: 30 
    };

const person2 = { 
    name: "Alice", 
    age: 30,
    result: 3.50 
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
  
 getProperty(person2, "name"); 
 getProperty(person2, "result");
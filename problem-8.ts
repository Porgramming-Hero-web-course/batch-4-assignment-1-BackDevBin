const person3 = { 
    name: "Alice", 
    age: 25, 
    email: "alice@example.com" 
};

function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    for (const key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  }
  
  validateKeys(person3, ["name", "age"]); 
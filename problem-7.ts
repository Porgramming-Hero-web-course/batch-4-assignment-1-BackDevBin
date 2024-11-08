class Car {
  
    constructor(public make: string, public model: string, public year: number) {
      
    }
  
    getCarAge(): number {
      const age = 2024 - this.year;
      return age;
    }
  }
  
  const objCar = new Car("Honda", "Civic", 2019);
  console.log(objCar.getCarAge());
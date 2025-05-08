{
  //==
  function formatString(input: string, toUpper?: boolean): string {
    if (input && toUpper === true) {
      return input.toUpperCase();
    } else if (input && toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }

  const formatStringCheck = formatString("sumon");
  //   console.log(formatStringCheck);

  //==

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  const processValueCheck = processValue(10);
  //   console.log(processValueCheck);

  //==
  class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
      (this.make = make), (this.year = year);
    }

    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel() {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  //   console.log(myCar.getInfo());
  //   console.log(myCar.getModel());

  //==
  //   function concatenateArrays<T>(...arrays: T[][]) {

  //   }

  //   const makeConcatenat = concatenateArrays(["a", "b"], ["c"]);
  //   console.log(makeConcatenat);
  //==

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (!products.length) {
      return null;
    } else {
      let bigPice: number = 0;
      let finalObj: any;
      for (let i = 0; i < products.length; i++) {
        if (products[i].price > bigPice) {
          bigPice = products[i].price;
          finalObj = products[i];
        }
      }
      return finalObj;
    }
  }
  const products = [
    { name: "Pen", price: 110 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];
  const checkTheMostExpensivePro = getMostExpensiveProduct(products);
  //   console.log(checkTheMostExpensivePro);
  //==
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day == Day.Sunday) {
      return "Weekend";
    } else {
      return "WeekDay";
    }
  }
  const checkExatDay = getDayType(Day.Sunday); // Output: "Weekday"
  console.log(checkExatDay);
  ///
}

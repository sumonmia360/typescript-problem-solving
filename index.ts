{
  function formatString(input: string, toUpper?: boolean): string {
    if (input && toUpper === true) {
      return input.toUpperCase();
    } else if (input && toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }
  formatString("Hello");

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    let filteringArray: any = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].rating >= 4) {
        filteringArray.push(items[i]);
      }
    }
    return filteringArray;
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];
  filterByRating(books);

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
  myCar.getInfo();
  myCar.getModel();

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
  processValue("hello");
  processValue(10);

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
  getMostExpensiveProduct(products);

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
    if (day == Day.Sunday || day == Day.Saturday) {
      return "Weekend";
    } else {
      return "WeekDay";
    }
  }
  getDayType(Day.Monday);
  getDayType(Day.Sunday);
}

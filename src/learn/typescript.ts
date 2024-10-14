// Type Annotations (Chú thích kiểu)
let age: number = 25; // Biến age có kiểu là number
let isStudent: boolean = true; // Biến isStudent có kiểu là boolean

// Type Inference (Suy diễn kiểu)
let age1 = 25; // TypeScript tự động suy diễn kiểu là number
let name = "Alice"; // TypeScript tự động suy diễn kiểu là string

// Type Aliases (Bí danh kiểu)
type Person1 = { name: string; age: number }; // Định nghĩa bí danh kiểu Person
let person: Person1 = { name: "Alice", age: 25 }; // Sử dụng bí danh kiểu Person

// Union Type (Kiểu hợp nhất)
let id: number | string; // id có thể là số hoặc chuỗi
id = 123; // Gán giá trị kiểu number
id = "ABC"; // Gán giá trị kiểu string

// Intersection Types (Kiểu giao nhau)
type Person2 = { name: string; age: number };
type Employee = { employeeId: number; position: string };
type Staff = Person2 & Employee; // Staff kết hợp các thuộc tính của Person và Employee
const staffMember: Staff = {
   name: "John Doe",
   age: 30,
   employeeId: 1234,
   position: "Developer",
};

// Interfaces
interface Vehicle {
   brand: string;
   model: string;
   year: number;
   start(): void; // Phương thức
}
const myCar: Vehicle = {
   brand: "Toyota",
   model: "Corolla",
   year: 2020,
   start: () => {
      console.log("Car started");
   },
};

// Generics
function identity<T>(arg: T): T {
   return arg;
}
let output = identity<string>("Hello World"); // output là kiểu string
let numberOutput = identity<number>(42); // numberOutput là kiểu number

//  Mapped Types
type User = { name: string; age: number; email?: string };
type Stringify<T> = { [K in keyof T]: string };
type StringifiedUser = Stringify<User>; // Tạo kiểu mới với tất cả các thuộc tính đều là string
const user: StringifiedUser = {
   name: "Alice",
   age: "25",
   email: "alice@example.com",
};

// Conditional Types
type Check<T> = T extends string ? "It's a string" : "Not a string";
type Test1 = Check<string>; // "It's a string"
type Test2 = Check<number>; // "Not a string"

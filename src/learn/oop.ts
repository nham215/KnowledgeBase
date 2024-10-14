// 1. Abstraction: Tạo một lớp trừu tượng Person
abstract class Person {
   protected name: string;
   protected age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }

   // Phương thức trừu tượng bắt buộc các lớp con phải triển khai
   abstract introduce(): void;
}

// 2. Inheritance: Tạo lớp Student kế thừa từ Person
class Student extends Person {
   private studentId: number;
   private grade: number;

   constructor(name: string, age: number, studentId: number, grade: number) {
      super(name, age); // Gọi constructor của Person
      this.studentId = studentId;
      this.grade = grade;
   }

   // Override phương thức introduce (Polymorphism)
   introduce() {
      console.log(
         `Hi, I'm ${this.name}, ${this.age} years old, and I'm in grade ${this.grade}. My student ID is ${this.studentId}.`
      );
   }

   // Encapsulation: Cung cấp phương thức để thay đổi thuộc tính grade
   public updateGrade(newGrade: number): void {
      if (newGrade > 0) {
         this.grade = newGrade;
         console.log(`Grade updated to ${this.grade}`);
      }
   }
}

// 3. Inheritance: Tạo lớp Teacher kế thừa từ Person
class Teacher extends Person {
   private employeeId: number;
   private subject: string;
   private salary: number;

   constructor(
      name: string,
      age: number,
      employeeId: number,
      subject: string,
      salary: number
   ) {
      super(name, age); // Gọi constructor của Person
      this.employeeId = employeeId;
      this.subject = subject;
      this.salary = salary;
   }

   // Override phương thức introduce (Polymorphism)
   introduce() {
      console.log(
         `Hello, I'm ${this.name}, I teach ${this.subject} and my employee ID is ${this.employeeId}.`
      );
   }

   // Encapsulation: Cung cấp phương thức để thay đổi thuộc tính salary
   public updateSalary(newSalary: number): void {
      if (newSalary > 0) {
         this.salary = newSalary;
         console.log(`Salary updated to ${this.salary}`);
      }
   }
}

// 4. Polymorphism: Tạo một mảng chứa cả Student và Teacher
const people: Person[] = [
   new Student("Alice", 15, 12345, 10),
   new Teacher("Mr. John", 40, 9876, "Mathematics", 50000),
];

// Gọi phương thức introduce() cho từng đối tượng
people.forEach((person) => person.introduce());

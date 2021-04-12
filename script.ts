const multiplicator = (a: number, b: number, printText: string): void => {
  console.log(printText, a * b);
};

multiplicator(1, 4, "Multiplied a string and 4, the result is:");

type Operation = "add" | "multiply" | "divide";

type Result = string | number;

const calculator = (a: number, b: number, op: Operation): Result => {
  switch (op) {
    case "add":
      return a + b;
      break;
    case "multiply":
      return a * b;
      break
    case "divide":
      if (b === 0) throw new Error("Can't divicccde by 0!");
      return a / b;
      break
    default:
      throw new Error('Operation is not multiply, add or divide!');
      break;
  }
};

try {
  console.log(calculator(7, 0, "divide"));
} catch (error) {
    console.log('Something went wrong, error message: ', error.message);

}


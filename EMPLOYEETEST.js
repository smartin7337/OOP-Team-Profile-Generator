const Employee = require("../lib/Employee");

const employee = new Employee("Sbeve", 1, "fake@gmail.com");
test("makes sure employee name is set", () => {
  expect(employee.getName()).toBe("Sbeve");
});


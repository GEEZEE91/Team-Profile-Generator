const Employee = require("../src/Employee.js")

test ("Initialization", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});
test ("set an emplyee name", () => {
    const name = 'Marco';
    const e = new Employee(name);
    expect(e.name).toBe(name,'','');
});
test ("set an emplyee idd number", () => {
const id = 123;
const e = new Employee('', id, '');
expect(e.id).toBe(id);
});
test ("set an emplyee email", () => {
    const email = 'test@example.com';
    const e = new Employee('','', email);
    expect(e.email).toBe(email);
});
test ("get name from getName method", () => {
    const name = "Marco";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
});
test ("get id from getID method", () => {
    const id = "123";
    const e = new Employee('', id,'');
    expect(e.getId()).toBe(id);
});
test ("get email from getEmail method", () => {
    const email = "test@example.com";
    const e = new Employee('','', email);
    expect(e.getEmail()).toBe(email);
});
test ("get emplyee returned from getRole method", () => {
    const e = new Employee();
    expect(e.getRole()).toEqual("Employee");
});

const Manager = require("../src/manager");

test ("set an office number", () => {
    const officeNumber = '9111 7722';
    const e = new Manager('','', '',officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
});
test ("get manager role returned from getRole method", () => {
    const e = new Manager;
    expect(e.getRole()).toEqual("Manager");
});
test("get officeNumber returned from getOfficeNumber method", () => {
    const officeNumber = '9111 7722';
    const e = new Manager('','','',officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber);
});
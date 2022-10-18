const Intern = require("../src/Intern.js");

test("Can set school", () => {
    const school = "UWA";
    const e = new Intern('', '', '', school);
    expect(e.school).toBe(school);
  });
  
  test("getRole() should return Intern", () => {
    const e = new Intern;
    expect(e.getRole()).toEqual("Intern");
  });
  
  test("get school via getSchool()", () => {
    const school = "UWA";
    const e = new Intern("", "", "", school);
    expect(e.getSchool()).toBe(school);
  });
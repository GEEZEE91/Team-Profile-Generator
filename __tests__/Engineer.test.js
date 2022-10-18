const Engineer = require("../src/Engineer.js");

test("Can set github", () => {
    const github = "geezee91";
    const e = new Engineer('', '', '', github);
    expect(e.github).toBe(github);
  });
  
  test("getRole() should return Engineer", () => {
   
    const e = new Engineer;
    expect(e.getRole()).toEqual("Engineer");
  });
  
  test("get school via getGithub()", () => {
    const github = "geezee91";
    const e = new Engineer("", "", "", github);
    expect(e.getGithub()).toBe(github);
  });
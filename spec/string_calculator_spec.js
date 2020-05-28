const { add } = require("../src/string_calculator.js");

describe("stringCalculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  it("should return 1", () => {
    expect(add("1")).toBe(1);
  });
  it("should return 2", () => {
    expect(add("1,1")).toBe(2);
  });
  it("should return 10", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
  it("should return 6", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  it("should return 3", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  it("should return 3", () => {
    expect(add("//4\n142")).toBe(3);
  });
  it("should throw an error negatives not allowed -1, -2 ", () => {
    expect(() => {
      add("-1,-2,3,4");
    }).toThrow(
      new Error("negatives not allowed -1,-2")
    );
  });
  it("should return 3 ", () => {
    expect(add("//;\n1000;1;2")).toBe(3);
  });
  it("should return 6", () => {
    expect(add("//*\n1**2**3")).toBe(6);
  });
  it("should return 6", () => {
    expect(add("//[:D][%]\n1:D2%3")).toBe(6);
  });
  it("should return 6", () => {
    expect(add("//[*][%%%]\n1***2%%%3")).toBe(6);
  });
  it("should return 6", () => {
    expect(add("//[(-_-')][%]\n1(-_-')2%3")).toBe(6);
  });
  it("should return 7", () => {
    expect(add("//[abc][777][:(]\n1abc27773:(1")).toBe(7);
  });
  it("should throw error invalid input", () => {
    expect(() => {
      add("//;\n1000;1;2;");
    }).toThrow(new Error("invalid input"));
  });
  it("should throw error invalid input", () => {
    expect(() => {
      add("   //;\n1000,1;2");
    }).toThrow(new Error("invalid input"));
  });
  it("should throw error invalid input", () => {
    expect(() => {
      add("1,2,3//;\n1000,1;2");
    }).toThrow(new Error("invalid input"));
  });
});

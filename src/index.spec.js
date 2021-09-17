const hello = require("./index");

test("should say hello", () => {
  expect(hello("Soler")).toBe("Hello Soler");
});

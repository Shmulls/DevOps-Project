/* eslint-disable no-undef */
const { expect } = require("chai");

describe("avg", () => {
  describe("#average", () => {
    it("calculates the average", () => {
      const grades = [100, 90, 80];
      const sum = grades.reduce((total, grade) => total + grade, 0);
      const average = sum / grades.length;
      expect(average).to.equal(90);
    });
  });
});

describe("negative", () => {
  describe("#negative", () => {
    it("calculates the average correctly with negative grades", () => {
      const grades = [90, -80, 70, -60];
      const sum = grades.reduce((total, grade) => total + grade, 0);
      const average = sum / grades.length;
      expect(average).to.equal(5);
    });
  });
});

import generateScssFile from "./scss-generator";
import { ScssGeneratorTypes } from "./type";

describe("generateScssFile", () => {
  it("should generate an SCSS file with the given options", () => {
    const options: ScssGeneratorTypes = {
      name: "Test",
      saveTo: "src",
      asModule: true,
    };

    const result = generateScssFile(options);

    expect(result).toEqual({
      name: "Test",
      saveTo: "src",
      fileName: "Test.module.scss",
    });
  });
});

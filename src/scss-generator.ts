import { fileExists, putFile, touch } from "@mongez/fs";
import path from "path";
import { ScssGeneratorTypes } from "./type";

export default function generateScssFile(options: ScssGeneratorTypes) {
  const { name, saveTo, asModule } = options;

  const currentDirectory = path.resolve(process.cwd(), saveTo);

  const fileName = asModule ? `${name}.module.scss` : `${name}.scss`;

  const filePath = path.resolve(currentDirectory, fileName);

  if (fileExists(filePath)) {
    throw new Error("No File Exist");
  }

  const content = `.root {
    // style
  }`;

  putFile(filePath, content);
  touch(filePath);

  return {
    name,
    saveTo,
    fileName,
  };
}

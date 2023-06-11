export type ScssGeneratorTypes = {
  /*
    name: Name of your SCSS file.
    */
  name: string;

  /*
    saveTo: Path where the generated SCSS file will be saved.
    */
  saveTo: string;

  /*
    asModule: Specifies whether the generated SCSS file should be treated as a module.
    If set to true, the SCSS file can be imported and used as a module in other files.
    If set to false, the SCSS file will be a regular SCSS file without any module-specific features.
    */
  asModule: boolean;
};

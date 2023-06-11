# SCSS File Generator

This package provides a utility function to generate SCSS files with customizable options. It allows you to create SCSS files with different names, save locations, and module configurations.

## Usage

You can generate an SCSS file by calling the `generateScssFile` function with the desired options.

## Example

```javascript
import generateScssFile from "path/to/scssGenerator";

generateScssFile({
  name: "Test",
  saveTo: "src",
  asModule: true,
});
```

The `options` object passed to the `generateScssFile` function should have the following properties:

- `name` (string): The name of the SCSS file (without the extension).
- `saveTo` (string): The directory where the SCSS file should be saved.
- `asModule` (boolean): Set to `true` if the SCSS file should be generated as a module (`.module.scss`), or `false` for a regular SCSS file (`.scss`).

Upon successful generation of the SCSS file, a success message will be displayed in the console, indicating the file name and its generated location.

## Requirements

This package has the following dependencies:

- `@mongez/fs`: File system utilities for file manipulation.
- `chalk`: A library for colorful console output.
- `path`: A module for working with file paths.

Please make sure these dependencies are installed and accessible within your project.

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or improvements, please feel free to open an issue or submit a pull request on the GitHub repository.

## License

This package is licensed under the [MIT LICENSE](https://en.wikipedia.org/wiki/MIT_License).

You can copy and paste this Markdown code into your README.md file.

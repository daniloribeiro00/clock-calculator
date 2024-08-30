/** @type {import("prettier").Options} */

export default {
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  singleAttributePerLine: true,
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
};

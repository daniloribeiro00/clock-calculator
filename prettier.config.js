/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  htmlWhitespaceSensitivity: 'ignore',
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;

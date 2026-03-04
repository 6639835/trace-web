/* eslint-disable @typescript-eslint/no-require-imports */
const { fixupConfigRules } = require('@eslint/compat');

module.exports = [
  ...fixupConfigRules(require('eslint-config-next/core-web-vitals')),
  ...fixupConfigRules(require('eslint-config-next/typescript')),
];

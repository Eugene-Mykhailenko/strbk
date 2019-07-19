// This file loads all styles from components root folder recursively
const allCssContextRequire = require.context(
  '../../components',
  true,
  /\.(css|sass|scss)$/,
);
const commonStyles = require.context('./', true, /\.(css|sass|scss)$/);

allCssContextRequire.keys().forEach(allCssContextRequire);
commonStyles.keys().forEach(commonStyles);

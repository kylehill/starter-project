module.exports = {
  collectCoverageFrom: [
    "components/**/*.{js,jsx,ts,tsx}",
    "containers/**/*.{js,jsx,ts,tsx}",
    "contexts/**/*.{js,jsx,ts,tsx}",
    "util/**/*.{js,jsx,ts,tsx}",
    "!**/stories.{js,jsx,ts,tsx}",
  ],
  coverageDirectory: "<rootDir>/.coverage",
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^components/(.*)$": "<rootDir>/components/$1",
    "^containers/(.*)$": "<rootDir>/containers/$1",
    "^contexts/(.*)$": "<rootDir>/contexts/$1",
    "^types/(.*)$": "<rootDir>/types/$1",
    "^util/(.*)$": "<rootDir>/util/$1",
  },
};

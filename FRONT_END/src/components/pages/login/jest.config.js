module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios)/", // Ignora a pasta node_modules, exceto axios
    ],
  };
  
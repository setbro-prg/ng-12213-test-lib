module.exports = {
  name: "Dig App",
  displayName: {
    name: "Dig",
    color: "blue",
  },
  // preset: "jest-preset-angular",
  preset: "./jest.preset.js",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleNameMapper: {
    "@modules/(.*)": "<rootDir>/app/modules/$1",
  },
  coverageDirectory: "../coverage",
  coverageReporters: ["text", "cobertura", "lcov"],
  // reporters: [
  //   "default",
  //   [
  //     "jest-junit",
  //     { outputDirectory: "./coverage/test-results", outputName: "Tests.xml" },
  //   ],
  // ],
};

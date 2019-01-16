module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
     '<rootDir>/src/tests/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/tests/__mocks__/styleMock.js'
  },
  resolver: null,
};

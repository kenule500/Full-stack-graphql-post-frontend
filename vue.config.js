const { defineConfig } = require("@vue/cli-service");

const dotenv = require("dotenv");
const data = dotenv.config();

if (data.error) {
  const errorMessage = `Failed to load .env file: ${data.error}`;
  throw new Error(errorMessage);
}

const { APOLLO_API_URL } = data.parsed;

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~bootstrap/scss/bootstrap";`,
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("graphql")
      .test(/\.(graphql|gql)$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  },
});

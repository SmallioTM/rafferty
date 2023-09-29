const path = require("path");

module.exports = {
  // ... other Next.js configuration options ...

  webpack: (config, { isServer }) => {
    // Font configuration
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/_next/static/fonts", // Adjust this path as needed
          outputPath: "static/fonts", // Adjust this path as needed
        },
      },
    });

    return config;
  },

  // Define your font variables here
  env: {
    FONT_POLY: "PolySans Neutral, sans-serif",
    FONT_FORT: "FortescueDisplay, serif",
  },
};

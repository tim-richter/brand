const StyleDictionary = require('style-dictionary');

const DEFAULT_FILE_HEADER =
  'Created with style-dictionary. Do not edit directly\n/* istanbul ignore file @preserve */\n/* eslint-disable */';

/**
 * Custom format for js files, creates a minified object and exports it
 *
 * Use options.exportName to rename the default variable name of the export
 */
StyleDictionary.registerFormat({
  formatter: function ({ dictionary, options }) {
    return `// ${DEFAULT_FILE_HEADER}\n${
      options.imports ? options.imports.join('\n') : ''
    }\nexport const ${options.exportName || 'tokens'}${
      options.typeAnnotation ? `: ${options.typeAnnotation}` : ''
    } = ${JSON.stringify(
      StyleDictionary.formatHelpers.minifyDictionary(dictionary.tokens),
      null,
      2,
    )} as const;`;
  },
  name: 'simpleObject',
});


module.exports = {
  fileHeader: {
    default: () => {
      return [DEFAULT_FILE_HEADER];
    },
  },
  source: ["tokens/**/*.json5"],
  platforms: {
    js: {
      "transformGroup": "js",
      "buildPath": "build/js/",
      "files": [
        {
          "destination": "tokens.ts",
          "format": "simpleObject",
          options: {
            exportName: 'tokens',
          },
        },
      ]
    }
  }
};

import { definePreset } from '@pandacss/dev';
import { tokens } from '@timrichter/brand-tokens';

function transformValues(obj: Record<string, any>) {
	if (typeof obj !== 'object' || obj === null) {
		return { value: obj }
	}

	const transformed = Array.isArray(obj) ? [] : {}

	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			transformed[key] = transformValues(obj[key])
		}
	}

	return transformed
}

export const uiPreset = definePreset({
  theme: {
    tokens: {
      colors: transformValues(tokens.color),
    },
  },

  utilities: {
    extend: {
      px: {
        className: 'padding',
        values: 'spacing',
        transform(value) {
          return {
            paddingLeft: value,
            paddingRight: value,
          };
        },
      },
      py: {
        className: 'padding',
        values: 'spacing',
        transform(value) {
          return {
            paddingTop: value,
            paddingDown: value,
          };
        },
      },
      transition: {
        className: 'transition',
        values: ['fast'],
        transform(value) {
          return {
            transition: value === 'fast' ? 'all 300ms ease-in-out' : '',
          };
        },
      },
    },
  },
});

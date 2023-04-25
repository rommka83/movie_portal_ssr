import type { Preview } from '@storybook/react';
import '../src/app/styles/index.css';
import '../src/app/styles/vars.css';
import '../src/app/styles/_nulling-styles.css';
import './styles.css';
import '../src/app/styles/iconfonts.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

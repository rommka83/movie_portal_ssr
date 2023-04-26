import type { Preview } from '@storybook/react';
import '../styles/index.css';
import '../styles/vars.css';
import '../styles/_nulling-styles.css';
import './styles.css';
import '../styles/iconfonts.css';

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

import type { Preview } from "@storybook/react";
import stahlheimTheme from './stahlheimTheme';

const preview: Preview = {
  parameters: {
    docs: {
      theme: stahlheimTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

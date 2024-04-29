import type { Preview } from '@storybook/react'
import '@/app/globals.css'

import { withThemeByClassName } from '@storybook/addon-themes'

const MY_VIEWPORTS = {
  XS: {
    name: 'XS',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  SM: {
    name: 'SM',
    styles: {
      width: '640px',
      height: '1136px',
    },
  },
  MD: {
    name: 'MD',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  LG: {
    name: 'LG',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  XL: {
    name: 'XL',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
  XXL: {
    name: '2XL',
    styles: {
      width: '1536px',
      height: '960px',
    },
  },
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: MY_VIEWPORTS,
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview

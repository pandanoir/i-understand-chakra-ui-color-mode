'use client';
import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManager,
  extendTheme,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const ChakraProviderClient = ({
  children,
  initialColorMode,
}: PropsWithChildren<{
  initialColorMode: 'light' | 'dark' | undefined;
}>) => (
  <ChakraProvider
    colorModeManager={cookieStorageManager}
    theme={extendTheme({ config: { initialColorMode } })}
  >
    <ColorModeScript type='cookie' />
    {children}
  </ChakraProvider>
);

'use client';
import {
  ChakraProvider,
  cookieStorageManager,
  extendTheme,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const ChakraProviderClient = ({
  children,
  initialColorMode,
}: PropsWithChildren<{
  initialColorMode: 'light' | 'dark';
}>) => (
  <ChakraProvider
    colorModeManager={cookieStorageManager}
    theme={extendTheme({ config: { initialColorMode } })}
  >
    {children}
  </ChakraProvider>
);

'use client';
import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManager,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const ChakraProviderClient = ({
  children,
}: PropsWithChildren<unknown>) => (
  <ChakraProvider colorModeManager={cookieStorageManager}>
    <ColorModeScript type='cookie' />
    {children}
  </ChakraProvider>
);

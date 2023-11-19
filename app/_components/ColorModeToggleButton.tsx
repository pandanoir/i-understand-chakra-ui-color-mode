'use client';
import { Button, HStack, useColorMode } from '@chakra-ui/react';

export const ColorModeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack justify='space-between' as='header'>
      <Button onClick={toggleColorMode}>toggle</Button>
    </HStack>
  );
};

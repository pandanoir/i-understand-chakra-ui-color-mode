import { Button, Select } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ColorModeToggleButton } from './ColorModeToggleButton';

export const Content = () => (
  <>
    <ColorModeToggleButton />

    <Link href='/nothing' as={NextLink}>
      nothing
    </Link>
    <Link href='/with-color-mode-script' as={NextLink}>
      with ColorModeScript
    </Link>
    <Link href='/with-initial-color-mode' as={NextLink}>
      with initial color mode
    </Link>
    <Link href='/complete' as={NextLink}>
      complete
    </Link>

    <Button colorScheme='blue'>primary</Button>
    <Select placeholder='Select option'>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  </>
);

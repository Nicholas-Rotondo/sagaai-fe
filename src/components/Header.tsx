import * as React from 'react';
import {Box, Heading, Button, ButtonGroup, Flex, Spacer } from '@chakra-ui/react'

interface Props {
  window?: () => Window;
  style?: React.CSSProperties;
}

export default function DrawerAppBar(props: Props) {

  return (
    <Box
      position="sticky"
      top="0"
      bg="green.700"
      zIndex="banner"
      p={4}
      boxShadow="md"
    >
      <h1 style={{ color: 'white' }}>SagaAI</h1>
    </Box>
  );
}
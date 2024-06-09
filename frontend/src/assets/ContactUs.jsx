import React from 'react'
import { Card, CardHeader, CardBody} from '@chakra-ui/react'
import { Box, Text, Stack, Heading, StackDivider} from '@chakra-ui/react';
export default function ContactUs() {
  return (
    <Card>
  <CardHeader>
    <Heading size='xl'>Contact Us</Heading>
  </CardHeader>

  <CardBody>
    <Stack direction={['row']} align='center' divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Shrestha Pandey
        </Heading>
        <Text pt='2' fontSize='sm'>
          Contact: +91-9140XXXXXX
        </Text>
        <Text fontSize='sm'>
          E-mail: shresthapandey69@gmail.com
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Srijan Jain
        </Heading>
        <Text pt='2' fontSize='sm'>
          Contact: +91-7049XXXXX
        </Text>
        <Text  fontSize='sm'>
          E-mail: srijanjain2004@gmail.com
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
  )
}

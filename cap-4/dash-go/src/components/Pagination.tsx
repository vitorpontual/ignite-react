import { Box, Stack, Button } from '@chakra-ui/react'

export function Pagination() {
  return (
    <Stack
      direction='row'
      spacing='6'
      mt='8'
      justify='space-between'
      align='center'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de 100
      </Box>
      <Stack direction='row' spacing='2'>
        <Button size='sm' fontSize='xs' w='4' colorScheme='pink' disable _disable={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}>1</Button>
        <Button size='sm' fontSize='xs' w='4' bgColor='gray.700' _hover={{ bg: 'gray.500' }}>2</Button>
        <Button size='sm' fontSize='xs' w='4' bgColor='gray.700' _hover={{ bg: 'gray.500' }}>3</Button>
        <Button size='sm' fontSize='xs' w='4' bgColor='gray.700' _hover={{ bg: 'gray.500' }}>4</Button>
      </Stack>
    </Stack>
  )
}
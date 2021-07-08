import { Box, Stack, Button } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

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
        <strong>0</strong> - <strong>10</strong> de 60
      </Box>
      <Stack direction='row' spacing='2'>
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2}  />
        <PaginationItem number={3}  />
        <PaginationItem number={4}  />
        <PaginationItem number={5}  />
        <PaginationItem number={6}  />

      </Stack>
    </Stack>
  )
}
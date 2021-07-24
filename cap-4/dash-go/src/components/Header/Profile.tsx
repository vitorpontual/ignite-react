import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center' >
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Vitor Pontual</Text>
          <Text color='gray.300' fontSize='small'>vitorpguedes@me.com</Text>
        </Box>
      )}
      <Avatar size='md' name='Vitor Pontual' src='https://avatars.githubusercontent.com/u/42771088?v=4' />

    </Flex>
  )
}
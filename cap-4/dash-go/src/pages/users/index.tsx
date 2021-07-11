import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Checkbox, Tbody, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <SideBar />

        <Box flex='1' borderRadius={8} bg="gray.800" p={['1', '4', '6']}>
          <Flex mb='1' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>
            <Link href='/users/create' passHref>

              {isWideVersion ? (<Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine} fontSize='20' />}>Criar novo</Button>) : (<Button as='a' size='sm' fontSize='sm' colorScheme='pink' ><Icon as={RiAddLine} fontSize='20' /></Button>)}

            </Link>
          </Flex>
          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color='gray.300' w='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Vitor Pontual</Text>
                    <Text fontSize='sm' color='gray.300'>vitorpguedes@me.com</Text>

                  </Box>
                </Td>
                {isWideVersion && <Td>
                  07 de Julho, 2021
                </Td>}
           
                <Td>
                  {isWideVersion && <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>Editar</Button>}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Flex>
  )
}
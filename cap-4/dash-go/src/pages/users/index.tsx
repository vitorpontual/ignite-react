import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Checkbox, Tbody, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/userUsers";

export default function UserList() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetched,  error } = useUsers(page)



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
            <Heading size='lg' fontWeight='normal'>Usuários
            
            { !isLoading && isFetched && <Spinner size='sm' color='gray.300'ml='4' />}</Heading>
            <Link href='/users/create' passHref>

              {isWideVersion ? (<Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine} fontSize='20' />}>Criar novo</Button>) : (<Button as='a' size='sm' fontSize='sm' colorScheme='pink' ><Icon as={RiAddLine} fontSize='20' /></Button>)}

            </Link>
          </Flex>
          {isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
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
                  {data.users.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td px={['4', '4', '6']}>
                          <Checkbox colorScheme='pink' />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight='bold'>{user.name}</Text>
                            <Text fontSize='sm' color='gray.300'>{user.email}</Text>

                          </Box>
                        </Td>
                        {isWideVersion && <Td>
                          {user.createdAt}
                        </Td>}

                        <Td>
                          {isWideVersion && <Button as='a' size='sm' fontSize='sm' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>Editar</Button>}
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
              <Pagination totalCountOfRegisters={data.totalCount} currentPage={page} onPageChange={setPage} />
            </>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}
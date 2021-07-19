import {  Icon, Link, Stack, Text } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'


export function SideBarNav() {
  return(
    <Stack spacing='12' align='flex-start'>
        <NavSection title={"GERAL"}>
          <NavLink icon={RiDashboardLine} href='/dashboard'>Dashboard</NavLink>
          <NavLink icon={RiContactsLine} href='/users'>Usuários</NavLink>
        </NavSection>
        <NavSection title={"AUTOMAÇÃO"}>
          <NavLink icon={RiInputMethodLine} href='/form'>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine} href='/automation'>Automação</NavLink>
        </NavSection>
      </Stack>
  )
}
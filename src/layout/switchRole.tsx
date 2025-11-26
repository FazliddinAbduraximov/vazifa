import { links } from './layout-data'

export const SwitchRole = ({ role }: { role: string }) => {
  switch (role) {
    case 'admin':
      return links.admin

    case 'teacher':
      return links.teacher

    default:
      return []
  }
}

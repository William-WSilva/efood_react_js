import { Link } from './BtnNavStyle'

type Props = {
  Children: string
}

export const BtnNav = ({ Children }: Props) => <Link to={''}>{Children}</Link>

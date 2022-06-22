import { Logo } from "../UI/Logo"

export const Header: React.FC = () => {
  return (
    <header
      className="
        w-full
        py-5
        flex
        items-center
        justify-center
        bg-gray-700
        border-b
        border-gray-600
      "
    >
      <Logo />
    </header>
  )
}
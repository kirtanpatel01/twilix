import { Link } from "react-router"

function Header() {
  return (
    <header className="sticky top-0 w-full flex justify-between items-center border-b bg-secondary px-4 py-2">
      <Link to="/">
        <h1 className="flex items-center">
          <img
            src="/favicon.svg"
            alt="Logo"
            className="mr-2 inline-block h-8 w-8"
          />
          <span className="font-grand-hotel text-2xl font-bold">Twilix</span>
        </h1>
      </Link>

      <Link to="https://github.com/kirtanpatel01/twilix" target="_blank" rel="noopener noreferrer">
        <button>
          <img src="/GitHub_Lockup_Black.svg" alt="GitHub" className="inline-block w-24" />
        </button>
      </Link>
    </header>
  )
}

export default Header

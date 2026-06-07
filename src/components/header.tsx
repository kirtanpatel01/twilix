import { Link } from "react-router"
import { GithubLogo } from "./github-logo"
import { ModeToggle } from "./mode-toggle"

function Header() {
  return (
    <header className="sticky top-0 flex h-(--header-height) w-full items-center justify-between border-b bg-secondary/75 px-3 py-2 text-accent-foreground">
      <Link to="/">
        <h1 className="flex items-center">
          <img
            src="/favicon.svg"
            alt="Logo"
            className="mr-2 inline-block h-8 w-8"
          />
          <span className="text-3xl font-extrabold">Twilix</span>
        </h1>
      </Link>

      <div className="flex items-center gap-4">
        <Link
          to="https://github.com/kirtanpatel01/twilix"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground-secondary transition-colors hover:text-foreground"
        >
          <GithubLogo className="h-6 w-auto" />
        </Link>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header

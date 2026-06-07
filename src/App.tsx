import { Link } from "react-router"
import { Button } from "./components/ui/button"

export function App() {
  return (
    <div className="min-h-screen-content flex items-center justify-center p-4">
      <Link to="/create">
        <Button size={"lg"}>Start Creating</Button>
      </Link>
    </div>
  )
}

export default App

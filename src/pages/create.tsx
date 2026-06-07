import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function Create() {
  return (
    <div className="min-h-screen-content p-4">
      <Link to="/create/card">
        <Button>Card</Button>
      </Link>
    </div>
  )
}
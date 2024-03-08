import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div>
      <h2>
        Error
      </h2>
      <p>
        Page not found
      </p>
      <p> Go to Homepage: <Link to='/' className="linktext"> Link </Link></p>
    </div>
  )
}

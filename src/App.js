import { Link, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div style={{ width: '80vw', margin: 'auto' }}>
      <h1>I don't know AWS...</h1>
      <hr />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/nothing">Nothing</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}

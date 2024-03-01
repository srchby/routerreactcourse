import { NavLink, Outlet } from "react-router-dom"

function HelpLayout() {
  return (
    <div className="course-layout">
      <nav>
        <NavLink to='video'> Video </NavLink>
      </nav>
    <Outlet />
    </div>
  )
}

export default HelpLayout

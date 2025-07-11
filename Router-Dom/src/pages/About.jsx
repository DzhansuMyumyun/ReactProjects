import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Link to="company">Company</Link>

      <Outlet/>
    </div>
  )
}

export default About
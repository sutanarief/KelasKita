import React from 'react';

type NavBarProps = {
  
};

const NavBar:React.FC<NavBarProps> = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  )
}
export default NavBar;
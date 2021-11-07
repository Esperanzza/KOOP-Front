import React from 'react';
import TriggerDarkMode from './TriggerDarkMode';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <nav className='bg-indigo-700'>
      <ul className='flex w-full justify-between my-3 text-white'>
        <li>Logo</li>
        <li>Navegacion1</li>
        <li>Navegacion2</li>
        <li>
          <TriggerDarkMode />
        </li>
        <li className='px-3'>
            <button 
            onClick={() => loginWithRedirect()}
            className='bg-yellow-500 p-2 text-white rounded-lg shadow-md hover:bg-yellow-700'>
              Iniciar Sesión
            </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

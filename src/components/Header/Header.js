import React from "react";
import Logo from '../../images/LogoPanfile.png';

import { UserLogStatusContext } from "../../contexts/UserLogStatusContext";

function Header ({openAuthModal}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); 
    const isLoggedIn = React.useContext(UserLogStatusContext)
     const openMobileMenu = () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
      }
    

    return(
        <header className="bg-pink-200 py-4 sticky top-0 z-10">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold font-diphylleia text-pink-800">
                    Panfilo Blog &hearts;
                </h1>
                <nav className="hidden md:flex space-x-4  hover:opacity-50 bg-pink-100 p-2  rounded-full
                                border-solid border-2 border-white transition duration-300">
                    <button className="text-pink-800 hover:text-pink-900" onClick={openAuthModal}>
                        {isLoggedIn ? 'Log Out' : 'Log In / Sign Up'}
                    </button>
                </nav>
                <button className="md:hidden text-pink-800">
                    <img
                    onClick={openMobileMenu}
                    className="w-6 h-6 aspect-square" 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII="
                    />
                </button>
            </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-pink-100 rounded-full">
            <button
              className="w-full text-pink-800 hover:text-pink-900 hover:bg-pink-300 px-4 py-2 rounded-md transition duration-300"
              onClick={() => {
                openAuthModal()
                setIsMobileMenuOpen(false);
              }}
            >
              {isLoggedIn ? 'Log Out' : 'Log In / Sign Up'}
            </button>
          </div>
        )}
        </header>
    )
}

export default Header;
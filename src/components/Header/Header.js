import React from "react";
import Logo from '../../images/LogoPanfile.png';

function Header () {
     const [isLoggedIn, setIsLoggedIn] = React.useState(false)


    return(
        <header className="bg-pink-200 py-4 sticky top-0 z-10">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold font-diphylleia text-pink-800">
                    Panfilo Blog &hearts;
                </h1>
                <nav className="hidden md:flex space-x-4  hover:opacity-50 bg-pink-100 p-2  rounded-full
                                border-solid border-2 border-white transition duration-300">
                    <button className="text-pink-800 hover:text-pink-900">
                        {isLoggedIn ? 'Log Out' : 'Log In / Sign Up'}
                    </button>
                </nav>
                <button className="md:hidden text-pink-800">
                    <img
                    className="w-6 h-6 aspect-square" 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII="
                    />
                </button>
            </div>
        </header>
    )
}

export default Header;
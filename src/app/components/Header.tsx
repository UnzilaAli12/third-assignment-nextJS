import React from "react";
import Image from "next/image";




const Header = () => {
      return (
        <header className="bg-cyan-800 text-cyan-300 p-5">
<div className= "container mx-auto flex justify-between item-center ">

               
    <h1 className="text-3xl font-bold justify-center ">
    Hi, Welcome To My Website
    </h1>
    <nav>
    <ul className="flex space-x-6 font-bold">

    <li>
    <a href="/" className="hover:text-red-300" target='block'>Home</a> </li>
    <li><a href="/" className="hover:text-red-300" target='block'>About</a> </li>
    <li><a href="/" className="hover:text-red-300" target='block'>Services</a> </li>
    <li><a href="/" className="hover:text-red-300" target='block'>Contact</a> </li>
    </ul>
</nav>
    
    </div>
</header>
      );

      };

      export default Header;
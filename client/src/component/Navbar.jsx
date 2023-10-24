import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  // navitem
  const navlink = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full z-50 bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0  left-0 right-0 bg-yellow-300": ""}`}>
        <div  className="flex justify-between items-center text-base gap-8">
        
          {/* logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700">
            E-Book
          </Link>
     

        <ul className="md:flex space-x-12 hidden gap-10">
          {navlink.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              className="text-black block uppercase text-base curser-pointer "
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* menu button --- lg device */}
        <div className="space-x-12 hidden lg:flex item-center">
          <button>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        {/* menu button --- mobile devices */}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpenMenu ? (
               <span className="material-symbols-outlined h-5 w-5 text-black">
               close
             </span>
             
            ) : (
              <span className="material-symbols-outlined h-5 w-5 text-black">
                menu
              </span>
            )}
          </button>
        </div>

        {/* navitem : sm devices */}
        <div
          className={`space-y-4 px-4 py-7 bg-blue-300 ${
            isOpenMenu ? "block top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navlink.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              className="text-black block uppercase text-base curser-pointer "
            >
              {link}
            </Link>
          ))}
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

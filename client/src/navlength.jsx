// navigation.js
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const NavBarLength = () => {
  // Estados independientes para cada dropdown
  const [openDropdowns, setOpenDropdowns] = useState({
    gen7: false,
    gen8: false,
    lightning: false,
    calc: false,
  });

  // Refs para detectar clics fuera
  const gen7Ref = useRef(null);
  const calcRef = useRef(null);
  const gen8Ref = useRef(null);
  const lightningRef = useRef(null);

  // Cierra todos los menús si haces clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calcRef.current &&
        !calcRef.current.contains(event.target) &&
        gen7Ref.current &&
        !gen7Ref.current.contains(event.target) &&
        gen8Ref.current &&
        !gen8Ref.current.contains(event.target) &&
        lightningRef.current &&
        !lightningRef.current.contains(event.target)
      ) {
        setOpenDropdowns({ gen7: false, calc: false, gen8: false, lightning: false });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Función para abrir/cerrar dropdowns
  const toggleDropdown = (menu) => {
    setOpenDropdowns((prev) => ({
      gen7: false,
      calc: false,
      gen8: false,
      lightning: false,
      [menu]: !prev[menu],
    }));
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <div className="navbar-dropdown" ref={calcRef}>
                <h2>Length Restrictions PXG</h2>
              </div>
          </div>

          <div className="navbar-menu-desktop">
            <Link to="/putter" className="navbar-link">Putter</Link>
            <Link to="/iron" className="navbar-link">Iron</Link>
            <Link to="/driver" className="navbar-link">Driver</Link>
            <Link to="/secretweapon" className="navbar-link">Secret Weapon</Link>
            <Link to="/fairway" className="navbar-link">Fairway</Link>
            <Link to="/Hybrid" className="navbar-link">Hybrid</Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default NavBarLength;
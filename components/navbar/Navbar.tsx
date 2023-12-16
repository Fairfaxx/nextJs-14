import Link from 'next/link';
import { ActiveLink } from '../active-link/ActiveLink';

const Navbar = () => {
  const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
  ];
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/">
        <span className="">Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};

export default Navbar;

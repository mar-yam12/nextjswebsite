// app/navbar/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className='navbar-links'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/product">Products</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;

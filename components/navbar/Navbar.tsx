import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" fixed bg-orange-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">Recipe Finder</span>
        </Link>
        <div>
          <Link href="/favorites">
            <span className="px-4 py-2 cursor-pointer">Favorites</span>
          </Link>
          <Link href="/about">
            <span className="px-4 py-2 cursor-pointer">About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

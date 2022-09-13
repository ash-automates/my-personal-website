import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-red-600">
      <nav className="container mx-auto flex justify-between text-white">
        <Link href="/">
          <a className="inline-flex items-center py-3 my-3 px-3 ml-1 rounded font-bold text-xl hover:bg-red-300">
            Hachem S.
          </a>
        </Link>
        <div className="inline-flex items-center mr-1">
          <Link href="/about">
            <a className="rounded py-3 px-2 hover:bg-red-300">About me</a>
          </Link>
          <Link href="/projects">
            <a className="rounded py-3 px-2 hover:bg-red-300">Projects</a>
          </Link>
          <Link href="https://github.com/ash-automates">
            <a className="rounded py-3 px-2 hover:bg-red-300" target="_blank">
              Github
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

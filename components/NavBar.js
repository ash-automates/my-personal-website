import Link from "next/link";
import { useEffect, useState } from "react";
import SanityClient from "../client";

const NavBar = () => {
  const [resume, setResume] = useState(null);
  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "author"]{
        "resumeUrl": resume.asset->url
      }`
    )
      .then((data) => setResume(data[0].resumeUrl))
      .catch(() => console.error());
  }, []);
  if (!resume) return;
  return (
    <header className="bg-blue-400">
      <nav className="container mx-auto flex justify-between text-green-100">
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
          <Link href={resume}>
            <a className="rounded py-3 px-2 hover:bg-red-300" target="_blank">
              Resume
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

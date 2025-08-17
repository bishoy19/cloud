"use client";
import style from "./header.module.css";
import { GrTechnology } from "react-icons/gr";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Nav = () => {
  const [togel, setTogel] = useState(false);
  return (
    <nav className={style.navbar}>
      <div>
        <Link href="/" className={style.logo}>
          Cloud
          <GrTechnology />
          hosting
        </Link>
        <div className={style.menuIcon}>
          {togel ? (
            <IoIosClose onClick={() => setTogel((e) => !e)} />
          ) : (
            <IoIosMenu onClick={() => setTogel((e) => !e)} />
          )}
        </div>
      </div>
      <div
        className={style.lainkWrapper}
        style={{
          clipPath: (togel && " polygon(0 0, 100% 0, 100% 100%, 0 100%)") || "",
        }}
      >
        <ul className={style.naveLinks}>
          <Link
            onClick={() => setTogel(false)}
            className={style.naveLink}
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setTogel(false)}
            className={style.naveLink}
            href="/articles"
          >
            Articles
          </Link>
          <Link
            onClick={() => setTogel(false)}
            className={style.naveLink}
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setTogel(false)}
            className={style.naveLink}
            href="/admin"
          >
            Admin Dashbord
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

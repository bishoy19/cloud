import Link from "next/link";
import style from "./header.module.css";
import Nav from "./Nav";
const Hader = () => {
  return (
    <header className={style.header}>
      <Nav />
      <div className={style.right}>
        <Link className={style.btn} href="/logn">
          Login
        </Link>
        <Link className={style.btn} href="/rigester">
          Rigester
        </Link>
      </div>
    </header>
  );
};

export default Hader;

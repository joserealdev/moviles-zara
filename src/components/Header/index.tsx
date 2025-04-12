import Logo from "@/icons/Logo";
import Link from "next/link";
import React from "react";
import CartLink from "./CartLink";
import styles from "./styles.module.css";

export const testIds = {
  link: "header-home-link",
};

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link href="/" data-testid={testIds.link} prefetch={false}>
        <Logo />
      </Link>
      <CartLink />
    </div>
  );
};

export default Header;

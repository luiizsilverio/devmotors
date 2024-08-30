"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Header() {
  const [top, setTop] = useState(true);

  const scrollHandler = () => {
    setTop(window.scrollY <= 10);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link href="/">Dev Motors</Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#contato">Contato</Link>
          </nav>

        </div>
      </div>
    </header>
  )
}
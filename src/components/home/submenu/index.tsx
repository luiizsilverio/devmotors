"use client"

import { useEffect, useState } from 'react';
import { X, Menu } from 'lucide-react';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Submenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen && window.innerWidth > 768) {
        setIsOpen(false);
      } 
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, [isOpen])

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.container}>
      <div className={styles.submenu} onClick={toggleMenu}>
        <Menu size={34} color='var(--COR-CINZA-ESCURO)' />
        Serviços
      </div>

      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>

        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeBtn}>
            <X size={54} color='var(--COR-CINZA-ESCURO)' />
          </button>
        )}

        <li><Link href="#">Troca de óleo</Link></li>
        <li><Link href="#">Manutenção preventiva</Link></li>
      </ul>
    </section>
  )
}
import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import styles from './styles.module.scss';

export default function Submenu() {
  return (
    <section className={styles.container}>
      <div className={styles.submenu}>
        <Menu size={34} color='var(--COR-CINZA-ESCURO)' />
        Menu
      </div>
      <ul className={styles.ul}>
        <li><Link href="#">AAA</Link></li>
        <li><Link href="#">BBB</Link></li>
      </ul>
    </section>
  )
}
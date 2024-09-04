"use client"

import Link from "next/link";
import styles from './styles.module.scss';
import { Container } from "@/components/container";

export default function Error() {

  return (
    <div className={styles.error}>
      <h2>Ops! Esta página não existe!</h2>
      <Link href="/">
        Voltar para a página principal
      </Link>
    </div>
  )
}

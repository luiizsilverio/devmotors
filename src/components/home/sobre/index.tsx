import Image from 'next/image';
import styles from './styles.module.scss';
import { AboutProps } from '@/utils/home.type';

interface Props {
  data: AboutProps;
}

export function Sobre({ data }: Props) {
  return (
    <section className={styles.container} id="sobre">
      <article>
        <h2>Sobre</h2>
        <p>{ data.description }</p>
      </article>
      <div className={styles.imgContainer}>
        <Image 
          src={data.banner.url}
          alt="Imagem ilustrativa sobre a empresa"
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
        />
      </div>
    </section>
  )
}
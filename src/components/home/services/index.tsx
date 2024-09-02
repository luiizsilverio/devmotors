import Image from 'next/image';
import { ServiceProps } from '@/utils/home.type';
import styles from './styles.module.scss';

interface Props {
  data: ServiceProps[];
}

export async function Services({ data }: Props) {
  return (
    <section className={styles.container} id="servicos">
      <h2>Conheça nossos serviços</h2>
      <section className={styles.services}>
        {data.map((service) => (
          <article key={service.description}>
            <div className={styles.imgContainer}>
              <Image 
                src={service.image.url}
                alt={service.description}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
              />
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </section>
  )
}
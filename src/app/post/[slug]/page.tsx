import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Hero } from "@/components/hero";
import { Container } from '@/components/container';
import { PostProps } from '@/utils/post.type';
import { getServiceBySlug } from '@/utils/actions/get-data';
import styles from './styles.module.scss';

interface Props {
  params: {
    slug: string;
  }
}

export default async function Page({ params }: Props) {
  const { objects }: PostProps = await getServiceBySlug(params.slug);
  const post = objects[0];

  return (
    <>
      <Hero 
        heading={post.title} 
        buttonTitle={post.metadata.button.title} 
        buttonUrl={post.metadata.button.url} 
        bannerUrl={post.metadata.banner.url} 
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <section className={styles.container}>
          <article className={styles.article}>
            <h2>{post.metadata.description.title}</h2>
            <p>{post.metadata.description.text}</p>
            {
              post.metadata.description.active &&
                <a href={post.metadata.description.btn_url as string} target='_blank'>
                  {post.metadata.description.btn_title}
                </a>
            }
          </article>

          <div className={styles.image}>
            <Image
              src={post.metadata.description.image.url}
              alt={post.title}
              quality={100}
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
            />
          </div>
        </section>

        <div className={styles.direitos}>
          <p>Todos os direitos reservados @{`${new Date().getFullYear()}`}</p>
        </div>
      </Container>

    </>
  )
}
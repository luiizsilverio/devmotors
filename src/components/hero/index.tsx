import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

interface HeroProps {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon: React.ReactElement;
}

export function Hero(props: HeroProps) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>{ props.heading }</h1>
        <a href={props.buttonUrl} target='_blank'>
          { props.icon }
          { props.buttonTitle }
        </a>
      </div>

      <div className={styles.banner}>
        <Image 
          alt={props.heading}
          src={props.bannerUrl}
          priority
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
        />
      </div>
    </main>
  )
}
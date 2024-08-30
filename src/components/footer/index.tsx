import { Mail, Map, Phone, Clock } from 'lucide-react';
import { MetadataProps } from '@/utils/home.type';
import styles from './styles.module.scss';

interface Props {
  data: MetadataProps;
}

export function Footer({ data }: Props) {
  return (
    <footer className={styles.container} id="contato">
      <section className={styles.contacts}>
        <h2>Contatos</h2>

        <div className={styles.content}>
          <div className={styles.item}>
            <Mail size={28} color="white" />
            <div>
              <strong>E-mail</strong>
              <p>{ data.contact.email }</p>
            </div>
          </div>

          <div className={styles.item}>
            <Phone size={28} color="white" />
            <div>
              <strong>Telefone</strong>
              <p>{ data.contact.phone }</p>
            </div>
          </div>

          <div className={styles.item}>
            <Clock size={28} color="white" />
            <div>
              <strong>Horário de funcionamento</strong>
              <p>{ data.contact.time }</p>
            </div>
          </div>

          <div className={styles.item}>
            <Map size={28} color="white" />
            <div>
              <strong>Endereço</strong>
              <p>{ data.contact.address }</p>
            </div>
          </div>
        </div>
      </section>

      <a href={data.cta_button.url} target='_blank' className={styles.fale_conosco}>
        <Phone size={24} color="#FFF" />
        { data.cta_button.title }
      </a>

      <div className={styles.direitos}>
        <p>Todos os direitos reservados Dev Motors @{`${new Date().getFullYear()}`}</p>
      </div>
    </footer>
  )
}
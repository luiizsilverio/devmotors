import { Phone } from 'lucide-react';
import { Hero } from "@/components/hero";
import { Submenu } from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { Sobre } from '@/components/home/sobre';
import { Services } from '@/components/home/services';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <main>
      <Submenu />
      <Hero 
        heading={object.metadata.heading} 
        buttonTitle={object.metadata.cta_button.title} 
        buttonUrl={object.metadata.cta_button.url} 
        bannerUrl={object.metadata.banner.url} 
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <Sobre data={object.metadata.about} />
        <Services data={object.metadata.services} />
        <Footer data={object.metadata} />
      </Container>
    </main>
  );
}

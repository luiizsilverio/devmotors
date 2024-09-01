import { Phone } from 'lucide-react';
import { Hero } from "@/components/hero";
import { Submenu } from "@/components/home/submenu";
import { Sobre } from '@/components/home/sobre';
import { Services } from '@/components/home/services';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { HomeProps, PagesProps } from "@/utils/home.type";
import { getDataHome, getServices } from "@/utils/actions/get-data";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  const menu: PagesProps = await getServices();

  return (
    <main>
      {menu.objects.length > 0 && 
        <Submenu menu={menu} />
      }

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

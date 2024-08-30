export interface HomeProps {
  object: {
    slug: string;
    title: string;
    metadata: MetadataProps;
  }
}

export interface MetadataProps {
  banner: {
    url: string;
  }
  heading: string;
  cta_button: {
    title: string;
    url: string;
  }
  about: AboutProps;
  services: ServiceProps[];
  contact: ContactProps;
}

export interface ServiceProps {
  image: {
    url: string;
  }
  description: string;
}

export interface AboutProps {
  description: string;
    banner: {
      url: string;
    }
}

export interface ContactProps {
  email: string;
  phone: string;
  address: string;
  time: string;
}
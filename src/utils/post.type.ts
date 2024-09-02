export interface PostProps {
  objects: ObjectProps[];
}

interface ObjectProps {
  slug: string;
  title: string;
  metadata: {
    banner: {
      url: string;
    }
    button: {
      title: string;
      url: string;
    }
    description: {
      title: string;
      text: string;
      image: {
        url: string;
      }
      active: boolean;
      btn_title: string;
      btn_url: string;
    }

  }

}
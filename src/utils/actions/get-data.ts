export async function getDataHome() {
  const { NEXT_PUBLIC_API_URL, COSMIC_READ_KEY } = process.env;
  const url = `${NEXT_PUBLIC_API_URL}/objects/66cf7baf23887ff69c06f620?read_key=${COSMIC_READ_KEY}&depth=1&props=slug,title,metadata`;

  try {
    const res = await fetch(url, { next: { revalidate: 120 }});

    if (!res.ok) {
      throw new Error("Erro ao buscar dados");
    }

    return res.json();
  } catch(err) {
    throw new Error("Erro ao buscar dados");
  }
}

export async function getServices() {
  const { NEXT_PUBLIC_API_URL, COSMIC_READ_KEY } = process.env;
  const url = `${NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22services%22%7D&limit=10&read_key=${COSMIC_READ_KEY}&depth=1&props=slug,title`;

  try {
    const res = await fetch(url, { next: { revalidate: 120 }});

    if (!res.ok) {
      throw new Error("Erro ao buscar serviços");
    }

    return res.json();
  } catch(err) {
    throw new Error("Erro ao buscar serviços");
  }
}
export async function getDataHome() {
  const { NEXT_PUBLIC_API_URL, COSMIC_READ_KEY } = process.env;
  const url = `${NEXT_PUBLIC_API_URL}/objects/66cf7baf23887ff69c06f620?read_key=${COSMIC_READ_KEY}&depth=1&props=slug,title,metadata`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Erro ao buscar dados");
    }

    return res.json();
  } catch(err) {
    throw new Error("Erro ao buscar dados");
  }
}
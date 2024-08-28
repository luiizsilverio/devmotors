import Submenu from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <main>
      <Submenu />
      <pre>
        {JSON.stringify(object, null, 2)}
      </pre>
    </main>
  );
}

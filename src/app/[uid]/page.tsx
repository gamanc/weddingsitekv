import { createClient } from "@/prismicio";

type Params = {
  params: {
    uid: string;
  };
};

export default async function Page({ params: { uid } }: Params) {
  const client = createClient();

  const page = await client.getByUID("page", uid);

  return <h1>{page.uid}</h1>;
}

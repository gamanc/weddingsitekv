import { createClient } from "@/prismicio";
import styles from "./page.module.css";
import { Metadata, ResolvingMetadata } from "next";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import Navbar from "@/components/Navbar";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ params, searchParams }: Props) {
  const client = createClient();
  const page = await client.getByUID("page", ".");

  const {
    data: { slices },
  } = page;

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <SliceZone slices={slices} components={components} />
      </main>
    </>
  );
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", ".");

  const {
    data: { title: pageTitle, metaTitle, metaDescription, metaImage },
  } = page;

  return {
    title: pageTitle,
    openGraph: {
      title: metaTitle || "",
      description: metaDescription || "",
      images: [
        {
          url: metaImage.url || "",
        },
      ],
    },
    themeColor: "#fee8e3",
  };
}

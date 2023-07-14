import { createClient } from "@/prismicio";
import styles from "./page.module.css";
import Head from "next/head";
import { Metadata, ResolvingMetadata } from "next";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID("page", ".");

  const {
    data: { slices },
  } = page;

  return (
    <main className={styles.main}>
      <SliceZone slices={slices} components={components} />
    </main>
  );
}

export async function generateMetadata(
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
  };
}

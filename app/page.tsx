import Image from "next/image";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";

async function getData() {
  const query = `
  *[_type == "blog"] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug" : slug.current,
      titleImage
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data);
  return (
    <div>
      {data.map((post, idx) => (
        <Image
          key={idx}
          src={urlFor(post.titleImage).url()}
          alt="image"
          width={100}
          height={100}
        />
      ))}
    </div>
  );
}

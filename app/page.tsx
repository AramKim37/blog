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
  return (
    <div className="grid grid-cols-2  mx-auto">
      {data.map((post, idx) => (
        <div key={idx} className="flex flex-col items-center justify-center">
          <Image
            src={urlFor(post.titleImage).url()}
            alt="image"
            width={300}
            height={300}
            className="object-cover object-center w-full h-full "
          />
          <h1>{post.title}</h1>
          <p>{post.smallDescription}</p>
        </div>
      ))}
    </div>
  );
}

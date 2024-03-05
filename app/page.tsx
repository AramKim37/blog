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
    <div className="grid grid-cols-2  mx-auto gap-5">
      {data.map((post, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center border border-white rounded-xl"
        >
          <Image
            src={urlFor(post.titleImage).url()}
            alt="image"
            width={500}
            height={300}
            className="object-cover object-center h-[200px] rounded-t-xl "
          />
          <div className="w-full flex flex-col items-left justify-center p-5 gap-2">
            <h1>{post.title}</h1>
            <p>{post.smallDescription}</p>
            <button className="bg-primary p-2 rounded-xl">READ MORE</button>
          </div>
        </div>
      ))}
    </div>
  );
}

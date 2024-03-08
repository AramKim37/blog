import Image from "next/image";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Link from "next/link";

export const revalidate = 30;

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
    <div className="max-w-screen-md w-full flex flex-col md:flex-row items-center mt-[50px] pt-[50px] gap-10  z-0 justify-center mx-auto">
      {data.map((post, idx) => (
        <div
          key={idx}
          className="w-[300px] flex flex-col border border-gray-500 dark:border-white rounded-xl"
        >
          <Image
            src={urlFor(post.titleImage).url()}
            alt="image"
            width={300}
            height={300}
            className="object-fill object-center w-[300px] h-[200px] rounded-xl border border-b-gray-500 "
          />
          <div className="w-full flex flex-col items-center justify-between p-5 space-y-3 h-[200px] overflow-scroll text-whitebg-secondary text-gray-400">
            <div className="flex flex-col h-full w-full items-center justify-between">
              <h1 className="text-xl uppercase text-center mx-auto">
                {post.title}
              </h1>
              <p className="">{post.smallDescription}</p>
              <Link href={`/blog/${post.currentSlug}`} className="w-full">
                <button className="w-full bg-primary p-2 rounded-xl text-white">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

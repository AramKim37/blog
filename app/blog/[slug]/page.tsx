import { BlogArticle } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}']{
        "currentSlug" : slug.current,
        title,
        content,
        titleImage,
    }[0]
    `;
  const data = await client.fetch(query);
  return data;
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const data: BlogArticle | null = await getData(params.slug);
  return (
    <div className="max-w-2xl mt-[100px]">
      <h1>Welcome to My blog</h1>
      <h2>{data?.title}</h2>
      <div>
        <Image
          src={urlFor(data?.titleImage).url()}
          width={900}
          height={500}
          alt="img"
        />
      </div>
    </div>
  );
}

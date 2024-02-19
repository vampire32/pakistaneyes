// pages/blog/[slug].js

import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

export default function BlogPost({ postData }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until the data is fetched and the page is re-rendered
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { title, content, imageUrl } = postData;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <Image src={imageUrl} alt={title} width={800} height={400} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // In this example, we don't fetch paths dynamically since we have a specific slug
  const paths = [{ params: { slug: "65d33eea92710ae07eee4825" } }];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `slug`.
  // If the route is like /blog/65d33eea92710ae07eee4825, then params.slug is 65d33eea92710ae07eee4825
  const res = await axios.get(`http://localhost:5000/api/news/${params.slug}`);
  const postData = res.data;

  // Pass post data to the page via props
  return {
    props: { postData },
  };
}

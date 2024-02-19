import React from 'react'
import Link from "next/link";
import axios from "axios";
const page = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  // Fetch a list of all blog posts from your API
  const res = await axios.get(
    "http://localhost:5000/api/news/65d33eea92710ae07eee4825"
  );
  const blogPosts = res.data;

  return {
    props: { blogPosts },
  };
}

export default page

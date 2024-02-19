

import Image from "next/image";
import Link from "next/link";
import main from "../assets/main.jpg"
import axios from "axios";
import React from "react";

import Head from "next/head";
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = "65d33eea92710ae07eee4825";

  // fetch data
  const product = await fetch(
    `http://localhost:5000/api/news/${id}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: ["https://img.freepik.com/free-vector/realistic-news-studio-background_52683-103246.jpg", ...previousImages],
    },
  };
}


export default async function Home({ params, searchParams }) {
  const fetchData = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/news/65d33eea92710ae07eee4825"
    );
    return res.data;
  };

  // Call fetchData directly
  const newsData = await fetchData();

  return (
    <>
      <Head>
        <title>{newsData.title}</title>
      </Head>

      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="border-b border-gray-200 dark:border-gray-800">
          <div className="px-4 py-6 md:px-6 lg:py-8 lg:grid lg:gap-4 lg:grid-cols-[200px_1fr]">
            <div className="flex items-center space-x-4">
              <Link className="text-xl font-semibold tracking-tight" href="#">
                YourSite
              </Link>
              <nav className="hidden md:flex space-x-2">
                <Link className="text-sm font-medium tracking-wide" href="#">
                  News
                </Link>
                <Link
                  className="text-sm font-medium tracking-wide"
                  href="#"
                ></Link>
                <Link className="text-sm font-medium tracking-wide" href="#">
                  Technology
                </Link>
                <Link className="text-sm font-medium tracking-wide" href="#">
                  Lifestyle
                </Link>
                <Link className="text-sm font-medium tracking-wide" href="#">
                  Opinion
                </Link>
              </nav>
            </div>
            <div className="flex items-center justify-end space-x-4 md:space-x-2">
              <Link
                className="text-sm font-medium tracking-wide md:hidden"
                href="#"
              >
                Sign in
              </Link>
              <Link
                className="text-sm font-medium tracking-wide md:hidden"
                href="#"
              >
                Subscribe
              </Link>
              <div className="flex items-center space-x-2">
                <Link
                  className="rounded-full overflow-hidden border-2 border-transparent"
                  href="#"
                >
                  <img
                    alt="Avatar"
                    className="rounded-full object-cover"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 md:py-12 md:px-6 lg:py-16">
          <div className="grid items-center gap-4 lg:grid-cols-[1fr_400px]">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
                Welcome to YourSite
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Your source for the latest news, in-depth analysis, and
                thought-provoking opinion pieces.
              </p>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden w-full max-w-sm justify-self-start">
              <Image
                alt="Hero image"
                className="object-cover"
                height={225}
                src={main}
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
          </div>
          <div className="bg-gray-100 border-t border-gray-200 dark:bg-gray-950 dark:border-gray-800">
            <div className="container px-4 py-6 md:py-12 lg:py-16">
              <div className="grid items-center gap-4 md:gap-8 lg:grid-cols-[200px_1fr]">
                <div className="grid gap-2 text-sm">
                  <p className="text-gray-500">Posted on August 24, 2023</p>
                  <p className="text-gray-500">Updated 1 hour ago</p>
                </div>
                <div className="prose prose-gray max-w-none md:prose-lg md:prose-invert lg:prose-xl lg:prose-invert">
                  <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl/relaxed">
                    Taxing Laughter: The Joke Tax Chronicles
                  </h1>
                  <p>
                    Once upon a time, in a far-off land, there was a very lazy
                    king who spent all day lounging on his throne. One day, his
                    advisors came to him with a problem: the kingdom was running
                    out of money.
                  </p>
                  <p>
                    Jokester began sneaking into the castle in the middle of the
                    night and leaving jokes all over the place: under the king's
                    pillow, in his soup, even in the royal toilet. The king was
                    furious, but he couldn't seem to stop Jokester.
                  </p>
                  <p>
                    And then, one day, the people of the kingdom discovered that
                    the jokes left by Jokester were so funny that they couldn't
                    help but laugh. And once they started laughing, they
                    couldn't stop.
                  </p>
                </div>
              </div>
              <Image
                alt="Cover image"
                className="aspect-video overflow-hidden rounded-lg object-cover"
                height={340}
                src={main}
                width={1250}
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-6 md:py-12 md:px-6 lg:py-16">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    The Art of Baking: Mastering the Perfect Croissant
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  There's nothing quite like the flaky, buttery goodness of a
                  perfectly baked croissant. But achieving that level of pastry
                  perfection at home can be a daunting task. Fear not, aspiring
                  bakers, for we are here to guide you through the art of making
                  the perfect croissant.
                </p>
              </div>
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    The Secret to a Happy Life: Finding Joy in the Little Things
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  In today's fast-paced world, it's all too easy to get caught
                  up in the hustle and bustle of everyday life. We're constantly
                  bombarded with messages telling us that we need to be more
                  successful, more productive, more everything. But in our quest
                  for "more," we often overlook the simple things that can bring
                  us the most joy.
                </p>
              </div>
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Uncovering the Mysteries of the Deep: Exploring the
                    Enchanting World of the Ocean
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  The ocean is a place of wonder and mystery, home to a
                  breathtaking array of creatures and landscapes that have
                  captivated the human imagination for centuries. From the
                  shimmering beauty of a coral reef to the inky depths of the
                  abyssal plain, the ocean is a world of endless fascination and
                  discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-6 md:py-12 md:px-6 lg:py-16">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    The Art of Baking: Mastering the Perfect Croissant
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  There's nothing quite like the flaky, buttery goodness of a
                  perfectly baked croissant. But achieving that level of pastry
                  perfection at home can be a daunting task. Fear not, aspiring
                  bakers, for we are here to guide you through the art of making
                  the perfect croissant.
                </p>
              </div>
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    The Secret to a Happy Life: Finding Joy in the Little Things
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  In today's fast-paced world, it's all too easy to get caught
                  up in the hustle and bustle of everyday life. We're constantly
                  bombarded with messages telling us that we need to be more
                  successful, more productive, more everything. But in our quest
                  for "more," we often overlook the simple things that can bring
                  us the most joy.
                </p>
              </div>
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Uncovering the Mysteries of the Deep: Exploring the
                    Enchanting World of the Ocean
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  The ocean is a place of wonder and mystery, home to a
                  breathtaking array of creatures and landscapes that have
                  captivated the human imagination for centuries. From the
                  shimmering beauty of a coral reef to the inky depths of the
                  abyssal plain, the ocean is a world of endless fascination and
                  discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-6 md:py-12 md:px-6 lg:py-16">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    The Art of Baking: Mastering the Perfect Croissant
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  There's nothing quite like the flaky, buttery goodness of a
                  perfectly baked croissant. But achieving that level of pastry
                  perfection at home can be a daunting task. Fear not, aspiring
                  bakers, for we are here to guide you through the art of making
                  the perfect croissant.
                </p>
              </div>
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    The Secret to a Happy Life: Finding Joy in the Little Things
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  In today's fast-paced world, it's all too easy to get caught
                  up in the hustle and bustle of everyday life. We're constantly
                  bombarded with messages telling us that we need to be more
                  successful, more productive, more everything. But in our quest
                  for "more," we often overlook the simple things that can bring
                  us the most joy.
                </p>
              </div>
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Uncovering the Mysteries of the Deep: Exploring the
                    Enchanting World of the Ocean
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  The ocean is a place of wonder and mystery, home to a
                  breathtaking array of creatures and landscapes that have
                  captivated the human imagination for centuries. From the
                  shimmering beauty of a coral reef to the inky depths of the
                  abyssal plain, the ocean is a world of endless fascination and
                  discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-6 md:py-12 md:px-6 lg:py-16">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    The Art of Baking: Mastering the Perfect Croissant
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  There's nothing quite like the flaky, buttery goodness of a
                  perfectly baked croissant. But achieving that level of pastry
                  perfection at home can be a daunting task. Fear not, aspiring
                  bakers, for we are here to guide you through the art of making
                  the perfect croissant.
                </p>
              </div>
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    The Secret to a Happy Life: Finding Joy in the Little Things
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  In today's fast-paced world, it's all too easy to get caught
                  up in the hustle and bustle of everyday life. We're constantly
                  bombarded with messages telling us that we need to be more
                  successful, more productive, more everything. But in our quest
                  for "more," we often overlook the simple things that can bring
                  us the most joy.
                </p>
              </div>
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Uncovering the Mysteries of the Deep: Exploring the
                    Enchanting World of the Ocean
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  The ocean is a place of wonder and mystery, home to a
                  breathtaking array of creatures and landscapes that have
                  captivated the human imagination for centuries. From the
                  shimmering beauty of a coral reef to the inky depths of the
                  abyssal plain, the ocean is a world of endless fascination and
                  discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-6 md:py-12 md:px-6 lg:py-16">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    The Art of Baking: Mastering the Perfect Croissant
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  There's nothing quite like the flaky, buttery goodness of a
                  perfectly baked croissant. But achieving that level of pastry
                  perfection at home can be a daunting task. Fear not, aspiring
                  bakers, for we are here to guide you through the art of making
                  the perfect croissant.
                </p>
              </div>
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    The Secret to a Happy Life: Finding Joy in the Little Things
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  In today's fast-paced world, it's all too easy to get caught
                  up in the hustle and bustle of everyday life. We're constantly
                  bombarded with messages telling us that we need to be more
                  successful, more productive, more everything. But in our quest
                  for "more," we often overlook the simple things that can bring
                  us the most joy.
                </p>
              </div>
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Uncovering the Mysteries of the Deep: Exploring the
                    Enchanting World of the Ocean
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  The ocean is a place of wonder and mystery, home to a
                  breathtaking array of creatures and landscapes that have
                  captivated the human imagination for centuries. From the
                  shimmering beauty of a coral reef to the inky depths of the
                  abyssal plain, the ocean is a world of endless fascination and
                  discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-6 md:py-12 md:px-6 lg:py-16">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    The Art of Baking: Mastering the Perfect Croissant
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  There's nothing quite like the flaky, buttery goodness of a
                  perfectly baked croissant. But achieving that level of pastry
                  perfection at home can be a daunting task. Fear not, aspiring
                  bakers, for we are here to guide you through the art of making
                  the perfect croissant.
                </p>
              </div>
              <div className="space-y-2">
                <Link className="font-medium" href="#">
                  <h2 className="text-2xl font-bold tracking-tight">
                    The Secret to a Happy Life: Finding Joy in the Little Things
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  Posted on August 24, 2023
                </p>
                <p>
                  In today's fast-paced world, it's all too easy to get caught
                  up in the hustle and bustle of everyday life. We're constantly
                  bombarded with messages telling us that we need to be more
                  successful, more productive, more everything. But in our quest
                  for "more," we often overlook the simple things that can bring
                  us the most joy.
                </p>
              </div>
              <div className="space-y-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

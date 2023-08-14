import Link from "next/link";
import Head from "next/head";
import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <Head>
        <title>minhui map</title>
        <meta name="description" content="Wanderlust atlas" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-screen mx-6 py-6">
        <div className="content flex flex-col max-h-[92vh]  h-[calc(100vh_-_5rem)]">
          <UserButton afterSignOutUrl="/" />

          <Link href="/dinner" className="my-6 text-xl" key="dinner">
            dinner
          </Link>
          <Link href="/tourism" className="my-6 text-xl" key="tourism">
            tourism
          </Link>
        </div>
      </main>
    </>
  );
}

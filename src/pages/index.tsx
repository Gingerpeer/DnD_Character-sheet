import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if(status === "loading"){
    return <main>Loading...</main>;
  }
// console.log(session)
  return (
    <>
      <Head>
        <title>Ruach Studios</title>
        <meta name="description" content="Ruach Studios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Guestbook</h1>
        {
          session ? (
            <div>
              <p>Hi {session.user?.name}</p>
              <p>Your email address is {session.user?.email}</p>
              <button onClick={()=> signOut()}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button onClick={()=> signIn("discord")}>
                Login with Discord
              </button>
            </div>
          )
        }
      </main>
    </>
  );
};

export default Home;


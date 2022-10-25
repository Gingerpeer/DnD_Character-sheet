import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

const Messages = () => {
  const { data: messages, isLoading } = trpc.guestbook.getAll.useQuery()

  if(isLoading) return <div>Fetching messages...</div>
  return(
    <div className="flex flex-col gap-4">
      {
        messages?.map((msg,index)=>{
          return (
            <div key={index}>
              <p>{msg.message}</p>
              <span>{msg.name}</span>
            </div>
          )
        })
      }
    </div>
  )
}

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if(status === "loading"){
    return <main className="flex flex-col items-center pt-4">Loading...</main>;
  }
// console.log(session)
  return (
    <>
      <Head>
        <title>Ruach Studios</title>
        <meta name="description" content="Ruach Studios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center">
        <h1 className="text-3xl pt-4">Guestbook</h1>
        {
          session ? (
            <div className="pt-10">
              <p>Hi {session.user?.name}</p>
              <p>Your email address is {session.user?.email}</p>
              <button onClick={()=> signOut()}>
                Logout
              </button>
              <div className="pt-10">
                <Messages />
              </div>
            </div>
          ) : (
            <div>
              <button onClick={()=> signIn("discord")}>
                Login with Discord
              </button>
              <div className="pt-10">
                <Messages />
              </div>
            </div>
          )
        }
      </main>
    </>
  );
};

export default Home;


import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import Dragon from "../../public/dragon.jpg"
import Discord from "../../public/discord.svg"
import { useState } from "react";

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
              <span>- {msg.name}</span>
            </div>
          )
        })
      }
    </div>
  )
}

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const [ message, setMessage ] = useState("")
  const ctx = trpc.useContext()
  const postMessage = trpc.guestbook.postMessage.useMutation({
    onMutate: ()=> {
      ctx.guestbook.getAll.cancel()

      const optimisticUpdate = ctx.guestbook.getAll.getData()
      if(optimisticUpdate){
        ctx.guestbook.getAll.setData(optimisticUpdate)
      }
    },
    onSettled: ()=>{
      ctx.guestbook.invalidate();
    },
  })
  if(status === "loading"){
    return <main className="flex flex-col items-center pt-4">Loading...</main>;
  }
    
// console.log(session)
  return (
    <>
      <Head>
        <title>Character Sheet {session ? `| ${session.user?.name}`: ""}</title>
        <meta name="description" content="DnD Character Sheet" />
        <link rel="icon" href="/dnd.svg" />
      </Head>
      <main className="flex flex-col items-center">
      <div className="bgWrap">
          <Image 
            src={Dragon} 
            sizes="100vw"
            style={{
              objectFit: "cover"
            }}
            alt="Dragon Image from https://www.pexels.com/search/dungeons%20and%20dragons/"  
            />
        </div>
        <div className="card bg-slate-500 bg-opacity-80 p-10 rounded mt-48">
          <h1 className="text-3xl pt-4 text-center">Character Sheet</h1>
          {
            session ? (
              <div className="pt-10">
                <p className="mb-5">Hi {session.user?.name}</p>
                <button className="p-2 rounded-md border-2 border-zinc-800 focus:outline-none hover:bg-red-400 hover:border-red-400" onClick={()=> signOut()}>
                  Logout
                </button>
                <div className="pt-6">
                  <form
                    className="flex gap-2"
                    onSubmit={(event)=>{
                      event.preventDefault();

                      postMessage.mutate({
                        name: session.user?.name as string,
                        message,
                      });
                      
                      setMessage("");
                    }}
                    >
                      <input 
                        type="text"
                        value={message}
                        placeholder="Your message..."
                        maxLength={100}
                        onChange={(event)=> setMessage(event.target.value)}
                        className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="p-2 rounded-md border-2 border-zinc-800 focus:outline-none hover:bg-red-400 hover:border-red-400"
                        >
                        Submit
                      </button>
                  </form>
                </div>
                <div className="pt-10">
                  <Messages />
                </div>
              </div>
            ) : (
              <div>
                
                <div className="pt-10">
                  <Messages />
                </div>
                <div className="card bg-purple-300 p-2 rounded">
                  <h1 className="text-center font-extrabold text-lg">Login</h1>
                <button className="mt-10 btn" onClick={()=> signIn("discord")}>
                  <Image
                    src={Discord}
                    width={64}
                    height={64}
                    alt="Icon by https://freeicons.io/profile/722"
                    />
                    
                </button>
                </div>
              </div>
            )
          }
        </div>
        <div className="footer">
            <p className="pt-10 mt-10">version 1.0</p>
          </div>
      </main>
    </>
  );
};

export default Home;


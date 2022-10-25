import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
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
        <title>Ruach Studios</title>
        <meta name="description" content="Ruach Studios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center">
        <h1 className="text-3xl pt-4">Comments</h1>
        {
          session ? (
            <div className="pt-10">
              <p>Hi {session.user?.name}</p>
              <button onClick={()=> signOut()}>
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
                      className="p-2 rounded-md border-2 border-zinc-800 focus:outline-none"
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
              <button className="mt-10 btn bg-blue-900 p-2 rounded-md" onClick={()=> signIn("discord")}>
                Login with Discord to Comment
              </button>
            </div>
          )
        }
        <div className="footer">
          <p className="pt-10 mt-10">version 1.0</p>
        </div>
      </main>
    </>
  );
};

export default Home;


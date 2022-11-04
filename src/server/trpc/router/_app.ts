// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { guestbookRouter } from "./guestbook";
import { characterRouter } from "./character";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  guestbook: guestbookRouter,
  character: characterRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

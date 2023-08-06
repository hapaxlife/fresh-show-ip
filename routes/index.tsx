import { Head } from "$fresh/runtime.ts";
import type { HandlerContext } from "$fresh/server.ts";
import { State } from "./_middleware.ts"

export default function Home(req: Request, ctx: HandlerContext<State>) {

console.log("Home " + ctx.state)
 const hostname = ctx.state?.hostname || "no ip"

  return (
    <>
      <Head>
        <title>fresh-show-ip</title>
      </Head>
            Visitor IP : {hostname}
    </>
  );
}

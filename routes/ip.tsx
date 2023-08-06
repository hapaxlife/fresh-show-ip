import { Head } from "$fresh/runtime.ts";
import { State } from "./_middleware.ts"
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext<State>) {
    console.log("GET Handler")
    console.log(ctx.state)
    const resp = await ctx.render(ctx.state);
    return resp;
  },
};

export default function Page({ data }: PageProps<State>) {
  const {hostname } = data;

  return (
    <>
      <Head>
        <title>fresh-show-ip</title>
      </Head>
            Visitor IP : {hostname}
    </>
  );
}

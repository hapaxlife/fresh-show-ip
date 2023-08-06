// routes/myHandler.ts
export const handler: Handlers<any, { data: string }> = {
    GET(_req, ctx) {
    console.log(ctx.state.data)
      return new Response(`middleware data is ${ctx.state.hostname}`);
    },
  };
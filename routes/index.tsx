import { defineRoute } from "$fresh/server.ts";

// Both `req` and `ctx` will have the correct type already
export default defineRoute(async (_req, ctx) => {
  console.log("index")
  console.log(ctx)
  const hostname = ctx.state?.hostname || "no ip"
  return <p>Visitor IP : {hostname}</p>;
})
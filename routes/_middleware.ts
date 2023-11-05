// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import { MiddlewareHandlerContext } from "$fresh/server.ts";

export interface State {
  hostname: string;
}

export async function handler(
  _req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  console.log("_middle")
  if (ctx.remoteAddr.transport === "tcp") {
    ctx.state.hostname = ctx.remoteAddr.hostname;
  } else {
    ctx.state.hostname = "not tcp";
  }
  console.log("getIp : " + ctx.state.hostname)
  return await ctx.next();
}

/*
function async getIp(_req: Request, ctx : MiddlewareHandlerContext<State>) {
  //ctx.state = {}
  if (ctx.remoteAddr.transport === "tcp") {
    ctx.state.hostname = ctx.remoteAddr.hostname;
  } else {
    ctx.state.hostname = "not tcp";
  }
  console.log("getIp : " + ctx.state.hostname)
  return await ctx.next();
}

export const handler = [
  getIp,
];
*/
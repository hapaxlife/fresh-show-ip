// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import { MiddlewareHandlerContext } from "$fresh/server.ts";

export interface State {
  hostname: string;
}

function getIp(_req: Request, ctx: MiddlewareHandlerContext<State>) {
  ctx.state = {}
  if (ctx.remoteAddr.transport === "tcp") {
    ctx.state.hostname = ctx.remoteAddr.hostname;
  } else {
    ctx.state.hostname = "not tcp";
  }
  ctx.state.data = "test data"
  console.log("getIp : " + ctx.state.hostname)
  return ctx.next();
}

export const handler = [
  getIp,
];

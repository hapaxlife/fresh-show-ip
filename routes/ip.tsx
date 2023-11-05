// routes/index.tsx
export const handler: Handlers = {
  GET(_req, ctx) {
      return ctx.render(ctx.state);
  },
};

export default function Ip(props: PageProps) {
  console.log("ip")
  console.log(props)
  const hostname = props.state?.hostname || "no ip"
  return <p>hostname is: {hostname}</p>;
}

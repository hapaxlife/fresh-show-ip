import { AppProps } from "$fresh/server.ts";

export default function App({ Component, state }: AppProps) {
  console.log("_app")
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Test ip</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
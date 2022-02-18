import { LiveReload, Outlet } from "remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <h1>Yo 🤘🏻</h1>
        <Outlet/>
        <LiveReload />
      </body>
    </html>
  );
}
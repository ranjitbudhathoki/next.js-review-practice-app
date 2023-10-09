import type { ReactNode } from "react";
import NavBar from "../components/NavBar";
import { orbitron, exo_2 } from "./fonts";
import "./global.css";

type LayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({ children }: LayoutProps): JSX.Element {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo_2.variable}`}>
      <body className="bg-orange-50 flex flex-col min-h-screen px-4 py-2">
        <header>
          <NavBar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-2 text-center text-xs text-slate-500 ">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io/"
            target="__blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}

import "./globals.css";
// import { noto } from "@/app/ui/fonts";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Marketing Track",
  description: "Challenges from GreatFrontEnd Projects | Built by evefonwu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={noto.className}> */}
      <body>
        {children}
        <footer>
          <div className="credits" data-gfe-screenshot-exclude="true">
            A challenge by{" "}
            <a
              href="https://www.greatfrontend.com/projects?ref=challenges"
              target="_blank"
            >
              GreatFrontEnd Projects
            </a>
            . Built by{" "}
            <a
              href="https://www.greatfrontend.com/projects/u/evefonwu"
              target="_blank"
            >
              evefonwu
            </a>
            .
          </div>
        </footer>
      </body>
    </html>
  );
}

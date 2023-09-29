import "./globals.css";
// You might need to adjust the import path based on your project structure
import { LenisScroller } from "@studio-freight/lenis";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        {props.children}
        <LenisScroller />
      </body>
    </html>
  );
}

export default RootLayout;

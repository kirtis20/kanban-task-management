import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "./App/page";
import NavBar from "../../components/NavBar/NavBar";
import PageSection from "../../components/NavBar/PageSection";
import UnitElemDisplay from "../../components/UnitElemDisplay/page";
import EyeButton from "../../components/EyeButton/EyeButton";
import EyeOrNav from "./Helpers/EyeBunOrNavBar";
import DisplayContext from "./Helpers/DisplayNavContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanban-Task-Manager",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full p-0 m-0 box-border">
      <body className={`${inter.className} box-border font-sans h-full p-0 m-0`}>
        <DisplayContext>
          {children}
          </DisplayContext>
          
      </body>
    </html>
  );
}

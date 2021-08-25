import { MainNavigation } from "../components/Navigation/MainNavigation";
import { Login } from "../components/Login/Login";
import head from "next/head";

export default function Home() {
  return (
    <>
      <MainNavigation />
      <Login/>
    </>
  );
}

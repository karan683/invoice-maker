import { MainNavigation } from "../components/Navigation/MainNavigation";
import Invoiceform from "../components/Invoiceform"
import head from "next/head";

export default function Home() {
  return (
    <>

      <MainNavigation/>
      <div className="bg-purple-50 p-5">
        <Invoiceform/>
      </div>
    </>
  );
}

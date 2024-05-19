import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
function BasePage({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default BasePage;

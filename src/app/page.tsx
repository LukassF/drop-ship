import HomePage from "../components/home_page";
import Navbar from "../components/navbar";

export default async function Home() {
  return (
    <>
      <Navbar page={0} />

      <HomePage />
    </>
  );
}

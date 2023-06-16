import Navbar from "@/components/navbar";
import Shop from "@/components/browse_page";

export default function Browse() {
  return (
    <>
      <Navbar page={1} />
      <Shop />
    </>
  );
}

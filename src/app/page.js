import Image from "next/image";
import headerstyles from "./header.module.css";
import yemaya from "@/../public/myImage.jpeg";



export default function Home() {
  return (
    <div>
      <h1>Goddesses</h1>
      <Image src={yemaya} alt="the most beautiful image you have every seen" placeholder="blur" />
    </div>
  );
}

import ItemCard from "@/components/item-card";
import Image from "next/image";

export default function Home() {
  console.log("Home");
  let linkImage = "https://cdn2.thecatapi.com/images";
  return (
    <main>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-5">
          <ItemCard name="Abyssinian" imgCat={`${linkImage}/0XYvRd7oD.jpg`} />
          <ItemCard name="Bombay" imgCat={`${linkImage}/5iYq9NmT1.jpg`} />
          <ItemCard name="Cheetoh" imgCat={`${linkImage}/IFXsxmXLm.jpg`} />
          <ItemCard name="Donskoy" imgCat={`${linkImage}/3KG57GfMW.jpg`} />
          <ItemCard name="Dream" imgCat={`${linkImage}/1q4.jpg`} />
          <ItemCard name="Egyptian Mau" imgCat={`${linkImage}/1q4.jpg`} />
          <ItemCard name="Exotic Shorthair" imgCat={`${linkImage}/1q4.jpg`} />
          <ItemCard name="Havana" imgCat={`${linkImage}/1q4.jpg`} />
          <ItemCard name="Himalayan" imgCat={`${linkImage}/1q4.jpg`} />

        </div>
      </div>
    </main>
  );
}

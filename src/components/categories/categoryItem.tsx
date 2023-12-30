import Image from "next/image";

interface CategoryItemProps {
  name: string;
  imageURL: string;
  onClick?: () => void;
}

const CategoryItem = ({ name, imageURL, onClick }: CategoryItemProps) => {
  return (
    <div className="category-item rounded border-b max-w-52 h-full shadow-sm hover:scale-105 transition" onClick={onClick}>
      <Image
        src={imageURL}
        alt={name}
        width={300}
        height={300}
        className="rounded" />
        
      <h3 className="text-center text-sm my-5 font-semibold">
        {name}
      </h3>
    </div>
  );
}

export default CategoryItem;
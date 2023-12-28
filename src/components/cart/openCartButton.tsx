import CartIconSVG from "../layout/navbar/cartIconSVG";

interface OpenCartButtonProps {
  onClick?: () => void;
}

const OpenCartButton = ({onClick}: OpenCartButtonProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <CartIconSVG />
    </div>
  );
}

export default OpenCartButton;
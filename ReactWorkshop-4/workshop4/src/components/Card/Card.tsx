import { Link } from "react-router-dom";
import type { Product } from "../../library";
import { Rating } from "../Raiting/Rating";

type Props = {
  product: Product;
};

export const Card = ({ product }: Props) => {
  return (
    <div className="Card col-4">
      <Link to={`/detail/${product.id}`}>
        <img src={`img/${product.id}.jpg`} alt="" />
        <h2>{product.title}</h2>
        <p className="price">{product.price}</p>
        <Rating stars={product.stars} />
      </Link>
    </div>
  );
};

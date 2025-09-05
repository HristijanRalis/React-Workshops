import { Link } from "react-router";
import type { ImageType } from "../types/types";

type Props = {
  image: ImageType;
  handleToggleFavorite: (id: string) => void;
};

export const Image = ({ image, handleToggleFavorite }: Props) => {
  return (
    <Link to={`/imageDetail/${image.id}`} className="Image">
      <img src={image.url} alt="" />
      <i
        onClick={(e) => {
          e.preventDefault();
          handleToggleFavorite(image.id);
        }}
        className={`${image.isFavorite ? "fas" : "far"}  fa-heart fa-2x`}
      ></i>
    </Link>
  );
};

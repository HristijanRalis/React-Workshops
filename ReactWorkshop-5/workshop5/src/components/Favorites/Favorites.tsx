import type { ImageType } from "../types/types";

type Props = {
  images: ImageType[];
};

export const Favorites = ({ images }: Props) => {
  const favoriteImages = images.filter((img) => img.isFavorite);

  return (
    <div>
      {favoriteImages.map((img) => (
        <img key={img.id} src={img.url} alt="" />
      ))}
    </div>
  );
};

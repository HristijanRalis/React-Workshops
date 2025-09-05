import React from "react";
import type { ImageType } from "../types/types";
import { Image } from "../ImagePage/Image";

type Props = {
  images: ImageType[];
  handleToggleFavorite: (id: string) => void;
};

export const ImageList = ({ images, handleToggleFavorite }: Props) => {
  return (
    <div className="imageList">
      {images.map((img) => {
        return (
          <Image
            handleToggleFavorite={handleToggleFavorite}
            key={img.id}
            image={img}
          />
        );
      })}
    </div>
  );
};

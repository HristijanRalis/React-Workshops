import React from "react";
import type { ImageType } from "../types/types";
import { useParams } from "react-router";

type Props = {
  images: ImageType[];
};

export const ImageDetails = ({ images }: Props) => {
  const { id } = useParams();

  const image = images.find((img) => img.id === id);
  if (!id) return <div>Image not found! </div>;
  return (
    <div>
      <img src={image?.url} alt="" />
    </div>
  );
};

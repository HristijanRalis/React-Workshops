import { data, Routes } from "react-router";
import "./App.css";
import { Header } from "./components/Header/Header";
import { ROUTES } from "./routes/routes";
import { Route } from "react-router";
import { ImageList } from "./components/ImageList/ImageList";
import { ImageDetails } from "./components/ImageDetails/ImageDetails";
import { Favorites } from "./components/Favorites/Favorites";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { useEffect, useState } from "react";
import type { ImageType } from "./components/types/types";
import { IMAGE_URL, LS_IMAGES_KEY } from "./constants/constants";

function App() {
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const lsImages = localStorage.getItem(LS_IMAGES_KEY);
    if (lsImages) {
      setImages(JSON.parse(lsImages));
    } else {
      fetch(IMAGE_URL)
        .then((res) => res.json())
        .then((data: ImageType[]) => {
          setImages(data);
        });
    }
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      localStorage.setItem(LS_IMAGES_KEY, JSON.stringify(images));
    }
  }, [images]);

  const handleToggleFavorite = (imgId: string) => {
    const updateImages = images.map((img) => {
      if (img.id === imgId) {
        return {
          ...img,
          isFavorite: !img.isFavorite,
        };
      }
      return img;
    });

    setImages(updateImages);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route
          path={ROUTES.imageList}
          element={
            <ImageList
              handleToggleFavorite={handleToggleFavorite}
              images={images}
            />
          }
        />
        <Route
          path={ROUTES.imageDetails}
          element={<ImageDetails images={images} />}
        />
        <Route
          path={ROUTES.favorites}
          element={<Favorites images={images} />}
        />
        <Route path={ROUTES.invalid} element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

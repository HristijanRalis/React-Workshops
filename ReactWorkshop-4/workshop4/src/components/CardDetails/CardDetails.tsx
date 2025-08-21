import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Banner } from "../Banner/Banner";
import products from "../../library";
import { Rating } from "../Raiting/Rating";

export const CardDetail = () => {
  const { id } = useParams();

  //const navigate = useNavigate();

  const product = products.find((p) => p.id === +id!);

  //if (!product) navigate("/");

  if (!product) return <Navigate to={"/error"} />;
  return (
    <>
      <Banner title={product.title} />
      <div className="container CardDetail">
        <div className="row">
          <div className="col-6">
            <img src={`/img/${product.id}.jpg`} alt="" />
          </div>
          <div className="col-6">
            <p className="price">{product.price}</p>
            <h2 className="title">{product.title}</h2>
            <Rating stars={product.stars} />
            <p className="info-cont">{product.desc}</p>
            <button className="button">Add to Card</button>
          </div>
        </div>
      </div>
    </>
  );
};

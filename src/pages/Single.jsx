import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductButton from "../components/Products/ProductButton";
import Line from "../components/extra/Line";
import Products from "../components/Products/Products";
import { useSelector, useDispatch } from "react-redux";
import { setSingleProduct } from "../features/product/productSlice";
import Price from "../components/extra/Price";
function Single() {
  const { id } = useParams();
  const { single, singleSimilarProducts } = useSelector((state) => {
    return state.products;
  });
  // const product = data.find((product) => product.id === +id);

  const imgPath = "/images/" + single.id + ".jpg";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSingleProduct(id));
  }, [id]);

  return (
    <div>
      <div
        id="single"
        className="row justify-content-center align-items-center text-white mx-auto"
      >
        <div className="col-md-6">
          <img
            src={imgPath}
            alt={single.name}
            className="card-img-top mb-5 mb-md-0 p-0 p-lg-5"
          />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fs-1 fw-bold">{single.name}</h2>
          <div className="fs-5 mb-2">
            {" "}
            <Price value={single.price} />
          </div>
          <p className="lead">{single.description.substring(0, 100)}</p>
          <ProductButton product={single} />
        </div>
      </div>
      <Line />
      <h2 className="text-white my-4 text-center">
        Similar Products Like This
      </h2>
      <Products products={singleSimilarProducts} />
    </div>
  );
}

export default Single;

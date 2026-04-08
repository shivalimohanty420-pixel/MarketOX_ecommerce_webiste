import { useEffect, useState } from 'react';
import './details.css'
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {

    const param = useParams();
    const [product, setProduct] = useState("");

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${param.id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [param.id]);

    return (
        <>

            <div className="container-d py-5">

                <div className="detail-card">
                    <div className="row g-0">

                        <div  className="col-md-5">
                            <div className="detail-img-wrap">
                                <img src={product.thumbnail} alt={product.title} />
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="p-4 p-md-5">

                                <span className="detail-category">{product.category}</span>
                                <h1 className="detail-title mt-2 mb-3">{product.title}</h1>

                                <div className="mb-3">
                                    <span className="rating-star">{"★".repeat(Math.round(product.rating))}
                                        {"☆".repeat(5 - Math.round(product.rating))}</span>
                                    <span style={{ fontSize: "0.8rem", color: "#aaa", marginLeft: 6 }}>({product.rating})</span>
                                </div>

                                <hr className="divider" />

                                <p className="detail-desc">{product.description}</p>

                                <hr className="divider" />

                                {/* Price & Stock */}
                                <div className="d-flex align-items-center gap-3 mb-2">
                                    <span className="detail-price">${product.price}</span>
                                    <span className="detail-badge">-{Math.round(product.discountPercentage)}% off</span>
                                </div>

                                <p style={{ fontSize: "0.8rem", color: product.stock < 10 ? "#e74c3c" : "#aaa", marginBottom: 24 }}>
                                    {product.stock < 10 ? `⚡ Only ${product.stock} left` : `✓ ${product.stock} in stock`}
                                </p>

                                <div className="mb-4">
                                    <span className="detail-badge">Brand: {product.brand}</span>
                                </div>

                                <button className="btn-cart">+ Add to Cart</button>

                            </div>
                        </div>
                        <div className="mb-4">
                            <Link to="/products" className="back-link">← Back to Products</Link>
                        </div>
                    </div>

                </div>



            </div>

        </>
    )
}

export default ProductDetail;
import { Link } from "react-router-dom"

const Prodt = ()=>{

    return(
        <>

<div className="carousel-item active">
              <div className="product-track">
                {[
                  { id: 1, name: 'Essence Mascara Lash Princess', category: 'Beauty',
                    price: '$9.99', tag: 'New',  
                    img: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp' },
                  { id: 2, name: 'Powder Canister',  category: 'Beauty', price: '$14.99', 
                    img: 'https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp' },
                  { id: 3, name: 'Annibale Colombo Bed', category: 'Furniture',  price: '$1,899.99', tag: 'Sale', 
                    img: 'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp' },
                  { id: 4, name: 'Calvin Klein CK One', category: 'Fragrances', price: '$49.99',      
                    img: 'https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp' },
                ].map((p) => (
                  <Link to="/products" key={p.id} className="product-card">
                    {p.tag && <span className={`product-badge badge-${p.tag.toLowerCase()}`}>{p.tag}</span>}
                    <div className="product-img-wrap">
                      <img src={p.img} alt={p.name} className="product-img" />
                    </div>
                    <div className="product-body">
                      <span className="product-cat">{p.category}</span>
                      <h3 className="product-name">{p.name}</h3>
                      <div className="product-footer">
                        <span className="product-price">{p.price}</span>
                        <button className="product-add-btn" onClick={(e) => e.preventDefault()}>+</button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>



        <div className="carousel-item">
              <div className="product-track">
                {[
                  { id: 5, name: 'Red Lipstick', category: 'Beauty', price: '$12.99',    tag: 'New',  
                    img: 'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp' },
                  { id: 6, name: 'Chanel Coco Noir', category: 'Fragrances', price: '$129.99',   tag: null,   
                    img: 'https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp' },
                  { id: 7, name: 'Annibale Colombo Sofa', category: 'Furniture', price: '$2,499.99', tag: 'Sale', 
                    img: 'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp' },
                  { id: 8, name: 'Eyeshadow Palette', category: 'Beauty', price: '$19.99', tag: null,   
                    img: 'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp' },
                ].map((p) => (
                  <Link to="/products" key={p.id} className="product-card">
                    {p.tag && <span className={`product-badge badge-${p.tag.toLowerCase()}`}>{p.tag}</span>}
                    <div className="product-img-wrap">
                      <img src={p.img} alt={p.name} className="product-img" />
                    </div>
                    <div className="product-body">
                      <span className="product-cat">{p.category}</span>
                      <h3 className="product-name">{p.name}</h3>
                      <div className="product-footer">
                        <span className="product-price">{p.price}</span>
                        <button className="product-add-btn">+</button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
        </>
    )
}

export default Prodt;
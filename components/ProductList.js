import React, { useState, useEffect, useCallback } from 'react';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            if (data.length === 0) {
                setHasMore(false);
            } else {
                setProducts((prev) => [...prev, ...data]);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
        setLoading(false);
    }, [page]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading && hasMore) {
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);


  return (
    <>
    <div className='container'>
        <div className='fis'>
            <div className='sortby'>
                <button>
                    <p>Sort By: Relevance</p>
                    <img  className='down' src='https://cdn-icons-png.flaticon.com/128/7996/7996254.png'/>
                    <img className='up' src='https://cdn-icons-png.flaticon.com/128/15827/15827733.png'/>
                </button>
                <div className='dropdown'>
                    <a>New arrival</a>
                    <a>Price High to low</a>
                    <a>Price Low to High</a>
                    <a>Ratings</a>
                    <a>Discount</a>
                </div>
            </div>
            <div className='filters'>

            </div>
        </div>
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} className='itmimg'/>
                    <h3>{product.title}</h3> 
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p>₹{product.price}</p>
                    <p style={{color:'gray',fontSize:'10px',fontWeight:'lighter',display:'flex',marginLeft:'5px'}}>onwards</p>
                    </div>
                    <div className="rating">
                        <span id='prdrating'>{product.rating.rate} ★</span>
                        <span style={{fontWeight:'lighter'}}>{product.rating.count} Reviews</span>
                    </div>
                </div>
            ))}
            {loading && <div className="loader">Loading...</div>}
            {!hasMore && <div className="loader">No more products</div>}
        </div>
    </div>
    </> 
  );
}

export default ProductList;
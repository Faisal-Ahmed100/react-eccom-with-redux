import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProFooter from '../components/ProFooter';


const Products = () => {
 const [data,setData]=useState([])
const [filter,setFilter]=useState(data);
const [loading,setLoading]=useState(false);
let componentMount=true;
const dispatch=useDispatch();
const addProduct=(product)=>{
  dispatch(addCart(product))
  toast.success(product.category, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}


useEffect(()=>{
const getProduct= async ()=>{
  setLoading(true);
const response= await fetch('https://fakestoreapi.com/products');
if(componentMount){
  setData(await response.clone().json());
  setFilter(await response.json());
  setLoading(false);
}
return () =>{
  componentMount = false;
}
}
getProduct();
},[]);

const Loading=()=>{
  return (
    <>
   
 <div className='col-md-3'> 
 <Skeleton height={350}/>
 </div>
 <div className='col-md-3'> 
 <Skeleton height={350}/>
 </div>
 <div className='col-md-3'> 
 <Skeleton height={350}/>
 </div>
 <div className='col-md-3'> 
 <Skeleton height={350}/>
 </div>
  
    </>
  )
};

const filterProduct=(cat)=>{
  const updateList=data.filter((x)=>x.category===cat);
  setFilter(updateList)
}

const ShowProducts=()=>{
  return(
    <>
   <div className="buttons d-flex justify-content-center mb-5">
    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewelery Clothing</button>
    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Electronic Clothing</button>
   </div>
   {
    filter.map((product)=>{
      return(
      
        <div className="col-md-3 mb-4 text-center" key={product.id}>
        <div className="card h-100 p-3 shadow-sm">
  <img src={product.image} className="card-img-top" height={'170px'} alt={product.title} />
  <div className="card-body">
    <h5 className="card-title">{product.title.substring(0,12)}</h5>
    <p className="card-text lead fw-bold">${product.price}</p>
    <div className="buttons">
        <button className='btn btn-outline-dark' onClick={()=>addProduct(product)}>Add to cart</button>
    <Link to={`/view/${product.id}`} className="btn btn-outline-dark ms-2">Details</Link>
  
    </div>
  </div>
</div>
        </div>
        
      )
    })
   }
    </>
  )
}
  return (
    <section className='product-sec'>
      <ToastContainer />
      <div className="product-bg mb-8">
        <h1>Our letast product</h1>
       
      </div>



<div className="container">
<div className='row justify-content-center pt-5'>
{
 loading ? <Loading /> : <ShowProducts />
}
</div>
</div>


<ProFooter />
    </section>
  )
}

export default Products
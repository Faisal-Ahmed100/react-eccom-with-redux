import { useSelector,useDispatch } from 'react-redux';
import { delCart } from '../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProFooter from '../components/ProFooter';



const Cart = () => {
    const state=useSelector(state=>state.handleCart);
    const dispatch=useDispatch();
    
    const DeleteItem=(item)=>{
        dispatch(delCart(item))
        toast.error(item.category, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const cartItem=(cartItem)=>{
        return (
            <section className='cart' key={cartItem.id}>
                <ToastContainer />
            <div className="container">
               
                <div className="cart-wapper">
              
                            <div className='py-3 d-flex align-items-center shadow-sm px-3 border my-2'>
                                <img src={cartItem.image} height='100px' width={'100px'} alt="" />
                                    <h2 className='title'>{cartItem.title.substring(0,30)}</h2>
                                    <p className='fw-bold p-0 mb-2 px-5'>Price: ${cartItem.price}</p>
        
                          
                                  
        
                                  <span className='fw-bold ms-5 mb-2'>Sub Total: </span>
                                  <p className='subtotal mx-2'>${cartItem.price}</p>
                                  
                                  <span className='ms-auto btn btn-dark' onClick={()=>DeleteItem(cartItem)}>X</span>
                                 
                            </div>
                    
                </div>
               
            </div>
          </section>
        )
    }
  
    const emtyCart=()=>{
        return(
            <>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center emtyCart'>
                    <img src="https://shop.metcraftchitra.com/images/emptycart.png" alt="" />
                </div>
            </div>
            </>
        )
    }

  return (
    <>
    
   <div className='cart-wrapper'>
{
    state.length === 0 && emtyCart()
}
{
    state.length !== 0 && state.map(cartItem)
}

</div> 
<ProFooter />
    </>

  )
}

export default Cart
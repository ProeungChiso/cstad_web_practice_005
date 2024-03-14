import { useEffect, useState } from 'react';
import CardComponent from '../Card/CardComponent'
import LoadingComponent from '../Loader/LoadingComponent';
import BtnCreateNewProduct from '../Button/BtnCreateNewProduct';

export type Products = {
    readonly id ?: number,
    title : string,
    price : number,
    image : string
}

export const MainComponent = () => {
    const [getProduct, setGetProduct] = useState<Products []>();
    const [loading, setLoading] = useState(false)
    async function fetchData() {
        setLoading(true)
        try{
        const fetchProduct = await fetch('https://fakestoreapi.com/products')
        const res = await fetchProduct.json()
        setGetProduct(res);
        }
        catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

  return (
    <>
        <h1 className='text-center my-10 text-3xl font-extrabold'>Products</h1>
        <BtnCreateNewProduct/>
            {
                loading ? 
                <LoadingComponent/> 
                : 
                <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-3 lg:gap-4 mx-auto my-10 px-2 md:px-5 lg:px-0'>
                {getProduct?.map((pro, index)=>(
                    <div className='flex justify-center'>
                    <CardComponent key={index} title={pro.title} price={pro.price} image={pro.image}/>
                    </div>
                ))}
                </div>
            }
    </>
  )
}

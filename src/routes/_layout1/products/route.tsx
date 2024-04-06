import { createFileRoute, Link } from '@tanstack/react-router'
// import { useSelector, useDispatch } from "react-redux"
import { useGetProductsQuery } from "app/service/dummyData"
import { TItem } from '../../../App'


export const Route = createFileRoute('/_layout1/products')({
  component: () => <Products />
})

function Products() {

  const { data, isFetching } = useGetProductsQuery("")

  if (isFetching) return (<div className='absolute top-0 z-[100] w-full h-screen bg-black text-5xl text-white flex items-center justify-center '>Fetching Data...</div>)

  return (
    <section className='container mx-auto lg:px-[20px] w-full min-h-screen'>

         <div className="w-full min-h-screen flex flex-wrap gap-5 justify-evenly">
        {
          data && data.products.map((item: TItem, idx: number) => (
            <div key={idx} className="group border w-[200px] h-[220px] my-2 hover:scale-[1.05] transition-all duration-300">

              <div className=" h-[150px] overflow-hidden">
                <img src={item.images[0]} alt="image" className="group-hover:hidden w-full h-full" />
                <img src={item.images[1]} alt="image" className="hidden group-hover:block w-full h-full" />
              </div>

              <div className='h-[70px] flex flex-col justify-center gap-1 p-1'>
                <Link to="/products/$productID" params={{ productID: item.id.toString() }}>
                  <p className='capitalize font-medium text-sm'>{item.title}</p>
                </Link>
                <p className='font-bold text-lg'>${item.price}</p>
              </div>

            </div>
          ))
        }
      </div>

    </section>
  )
}
import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useGetSingleProductQuery } from "app/service/dummyData"
import Loader from 'components/loader/Loader'

export const Route = createFileRoute('/products/$productID')({
  component: () => <RouteComponent />
})

function RouteComponent() {

  const { productID } = Route.useParams()
  const { data, isFetching } = useGetSingleProductQuery(productID)
  // console.log(data)


  const [currentImage, setCurrentImage] = React.useState(data?.images[0])


  if (isFetching) return (<Loader />)


  return (
    <div className='w-full min-h-screen'>

      {
        data && (
          <div className='w-full h-screen gap-x-36 flex items-center justify-center'>
            <div className='min-h-[500px]'>
              <div className='h-2/3 flex items-center justify-center'>
                <img src={currentImage || data.images[0]} alt="" />
              </div>
              <div className='mt-10 h-[100px] flex gap-5 items-center justify-center overflow-hidden'>
                {
                  data.images.map((item: (string | undefined), Idx: number) => {
                    console.log(item);

                    return (
                      <img src={item} key={Idx} alt="" className='w-20' onClick={() => setCurrentImage(data.images[Idx])} />
                    )
                  }
                  )
                }
              </div>
            </div>
            <div className='h-[500px] w-[500px] space-y-3'>
              <p className='text-3xl font-bold leading-loose tracking-widest'>{data.title}</p>
              <p className='font-medium tracking-wide'>{data.description}</p>
              <p className='text-4xl font-black tracking-wide'>${data.price}</p>
            </div>
          </div>
        )
      }


    </div>
  )
}
import { Button } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "app/features/counter/CounterSlice"
import { RootState } from "app/store"

export type TItem = {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

function App() {




  const dispatch = useDispatch()

  const { value } = useSelector((state: RootState) => state.counter)

  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center gap-3">
        <Button onClick={() => { dispatch(decrement()) }} variant="contained">-</Button>
        <p>{value}</p>
        <Button onClick={() => { dispatch(increment()) }} variant="contained">+</Button>
      </div>
   
    </div>
  )
}

export default App

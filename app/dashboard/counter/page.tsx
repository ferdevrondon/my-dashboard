
import {CartCounter} from "../../../shopping-cart"


export const metadata = {
    title: "Shopping Cart",
    description: "Counter",
}

export default function Counter() {


 return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span>Productos en el carrito: </span>
     <CartCounter value={20}/>
    
    </div>
  );
}
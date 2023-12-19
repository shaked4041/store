import ItemList from './ItemList'


export default function Cart(props) {

  const cartItems = props.fruits.filter((fruit) => props.counts[fruit.id] > 0)

  const total = cartItems.reduce((acc, current) => {
    return acc + (props.counts[current.id] * current.price)}, 0)

  return <div className='entireCart'>
    <div className='cartItems'>
      <div className='cart' >
        <div className='titleCart'>Your Cart</div>
        <ItemList items={cartItems} className={'itemsCart'} showActions={props.showActions}  counts={props.counts} addToCart={props.addToCart} removeFromCart={props.removeFromCart}/>
      </div>
    </div>
    <div className='total'>
      <span>Total:</span>
      {total.toFixed(2)}
    </div>
  </div>

}


// div className='entireCart'
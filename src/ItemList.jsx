import Item from './Item'


export default function ItemList(props) {

    return (
        <div id="itemList" className={`itemList ${props.className}`}>
            {props.items
                .map(f => <Item item={f} count={props.counts[f.id] || 0} key={f.id} showActions={props.showActions} addToCart={props.addToCart} removeFromCart={props.removeFromCart} />)}
        </div>

    )
}
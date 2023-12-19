
export default function Menu(props) {

  return (
    <div>
      <div id="buttons" >
        <button onClick={() => props.handleColor()}>All</button>
        {props.colors.map(c => <button className="colorButton" onClick={() => props.handleColor(c)}>{c}</button>)}
      </div>     
    </div>
  )
}

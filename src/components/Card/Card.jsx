import "./Card.css"

export default function Card(props){
    console.log(props);
    const item = props.item

    return <div className = "card">
    <h2>{item.nome}</h2>

     <div className="tags">
       <div className="tag">Status: Virgem</div>
       <div className="tag">Espécie: Nerd</div>
     </div>


    <img src="https://static.simpsonswiki.com/images/thumb/6/6a/Nerd_%28Robot_Chicken%29.png/375px-Nerd_%28Robot_Chicken%29.png"></img> 
    
    </div>
    
    }
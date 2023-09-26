import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    nome: 'Nerd',
    imagemUrl: 'https://static.simpsonswiki.com/images/thumb/6/6a/Nerd_%28Robot_Chicken%29.png/375px-Nerd_%28Robot_Chicken%29.png'
  }

  const item2 = {
    nome: 'Frango Rôbo',
    imagemUrl: ''
  }
   return (
    <>
      <Card item={item1} />
      <Card item={item2} />
    </>
  )
}

const itens = [item1, item2]

const itens = [item1, item2]

return (
  <>
    {itens.map(function (item) {
      return <Card item={item}/>
    })}
  </>
)

}

export default App

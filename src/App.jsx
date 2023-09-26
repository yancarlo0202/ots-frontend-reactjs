import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    nome: 'Nerd',
    imagemUrl: 'https://static.simpsonswiki.com/images/thumb/6/6a/Nerd_%28Robot_Chicken%29.png/375px-Nerd_%28Robot_Chicken%29.png'
  }
   return (
    <>
      <Card item = {item1} />
      <div></div>
     
    </>
  )
}

export default App

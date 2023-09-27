import Card from './components/Card/Card';

export function App() {
  const item1 = {
    nome: 'Nerd',
    imagemUrl: 'https://static.simpsonswiki.com/images/thumb/6/6a/Nerd_%28Robot_Chicken%29.png/375px-Nerd_%28Robot_Chicken%29.png'
  };

  const item2 = {
    nome: 'Frango Rôbo',
    imagemUrl: 'https://static.wikia.nocookie.net/p__/images/8/89/7EFE5573-7B92-4837-AC85-0100B34877EB.jpeg/revision/latest?cb=20200919222231&path-prefix=protagonist'
  };


  const itens = [item1, item2];

  return (
    <>
      {itens.map(function (item) {
        return <Card item={item} />;
      })}
    </>
  );

}

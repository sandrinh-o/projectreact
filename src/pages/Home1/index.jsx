import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Produto, TrashButton, Centro} from './styles'

function Home() {
  const [produtos, setProdutos] = useState ([])
  const inputRef = useRef() 

  function cliqueiNoBotao(){
    setProdutos([{id: v4(), nome:inputRef.current.value}, ...produtos])
    inputRef.current.value = ''
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))    
  }

  return (       
      <Centro>
        <h2>Seja Bem vindo ao Mercado On-line 🛒</h2>
        <h3>Adicione seu item na lista abaixo:</h3>             
          <Container>       
            <h1>Lista de Compras</h1>
              <input placeholder="Produto..." ref={inputRef}/>  
                <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

                  {produtos.map((produto) => (
                    <Produto key={produtos.id}>
                      <p>{produto.nome}</p> 
                <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</TrashButton>
              </Produto>
            ))}
          </Container>
      </Centro>
  )      
}

export default Home
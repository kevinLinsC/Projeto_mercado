import React from 'react'
import CardProduto from '../components/CardProduto'

import { useListaProdutos } from '../hooks/useApi'

const Home = () => {
  const produtos = useListaProdutos();

  return (
    <div>
      <h1>Lista</h1>
      {/* Usar o flex-wrap para criar os cursos */}
      <div className='d-flex col-12 gap-2 mt-3 justify-content-between flex-wrap'>
        <CardProduto 
          id='1'
          nome='Shampoo pra homem'
          descricao='Shampoo pra homem'
          preco='9,99'
          categoria='Saúde, limpeza, beleza e mecânico'
          imagemUrl='https://preview.redd.it/3sz6drpuoal41.jpg?auto=webp&s=f4801bed96c11d40aa547e70ee9f24b75cfeddde'
        />

        {produtos.map((prod) => (
          <CardProduto 
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            descricao={prod.descricao}
            preco={prod.preco}
            categoria={prod.categoria}
            imagemUrl={prod.imagemUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
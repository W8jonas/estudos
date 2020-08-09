import React, {useState,useEffect} from 'react';
import Menu from '../../components/Menu/index'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain/index'
import Carousel from '../../components/Carousel/index'
import Footer from '../../components/Footer/index'
import {URL_BASE} from '../../config/server'
import PageDefault from '../../components/pageDefault/index'

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([])

  useEffect(()=>{
    const URL = `${URL_BASE}/categorias?_embed=videos`
    
	  fetch(URL)
		.then(async (responseStringify)=>{
				const response = await responseStringify.json()
				setDadosIniciais([...response])
		})
  }, [])

  if(dadosIniciais.length < 1) return <div>Loading...</div>

  return (
    <PageDefault paddingAll={0}>
      <BannerMain
        videoTitle={dadosIniciais[0].videos[0].titulo}
        url={dadosIniciais[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área de não sei o resto"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais[0]}
      />

      <Carousel
        category={dadosIniciais[1]}
      />

      <Carousel
        category={dadosIniciais[2]}
      />

      <Carousel
        category={dadosIniciais[3]}
      />

      <Carousel
        category={dadosIniciais[4]}
      />

    </PageDefault>
  );
}

export default Home;
 
import React, {useState,useEffect} from 'react';

// Components
import BannerMain from '../../components/BannerMain/index'
import Carousel from '../../components/Carousel/index'
import PageDefault from '../../components/pageDefault/index'

// Extras
import {URL_BASE} from '../../config/server'

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

      {
        dadosIniciais.map((category, index)=> index === 0
         ? <div key={category.id}>
            <BannerMain
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription={"O que é Front-end? Trabalhando na área de não sei o resto"}
            />

            <Carousel
              ignoreFirstVideo
              category={dadosIniciais[0]}
            />
         </div>
         :  <Carousel
              key={category.id}
              category={dadosIniciais[index]}
            />
        )
      }
      
    </PageDefault>
  );
}

export default Home;
 
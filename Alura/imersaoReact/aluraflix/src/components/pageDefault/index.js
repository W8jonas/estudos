import React from 'react';
import styled from 'styled-components';

// Components
import Menu from '../Menu/index'
import Footer from '../Footer/index'


function PageDefault({children}) {
  return (
    <>
        <Menu/>
            <Main>
                {children}
            </Main>
        <Footer />
    </>
  )
}


const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`


export default PageDefault
import React from 'react';
import styled from '@emotion/styled';
import Navegacion from './Navegacion';
import { Link } from 'gatsby';
import UseSeo from '../hooks/use-Seo';

const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Roboto', serif;
    
`;

const HeaderTitulo = styled.header`
    background-color: #222;
    padding: 1rem;
`;

const DivTitulo = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    width: 90%;

    h1{
        color: #fff;
        text-align: center;
    }

    @media(min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const Header = () => {

    const data = UseSeo();
    const { siteName } = data;

    return (  
        <>
            <div>
                <HeaderTitulo>
                    <DivTitulo>
                            <Logo 
                                to={'/'}
                            ><h1>{siteName}</h1></Logo>
                        
                        <Navegacion />
                    </DivTitulo>

                </HeaderTitulo>
            </div>
        </>
    );
}

export default Header;
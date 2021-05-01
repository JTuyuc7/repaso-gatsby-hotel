import React from 'react';
import styled from '@emotion/styled';
import Navegacion from './Navegacion';
import { Link } from 'gatsby';

const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Roboto', serif;
`;

const HeaderTitulo = styled.header`
    background-color: #222;
    padding: 3rem;

    p{
        text-align: center;
        color: #fff;
        margin-bottom: 0;
    }

    span{
        font-weight: bold;
    }
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

const DivFooter = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    width: 90%;

    h1{
        font-size: 2rem;

        &:hover{
            color: #f5e5a1;
        }
    }

    @media( min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const Footer = () => {

    const year = new Date().getFullYear();

    return (  
        <>
            <div>
                <HeaderTitulo>
                    <DivTitulo>
                            <Logo 
                                to={'/'}
                            ><h1>Hotel Gatsby</h1></Logo>
                        
                        <Navegacion />
                    </DivTitulo>

                    <DivFooter>
                        <Logo to="#"> <h1>Facebook</h1></Logo>
                        <Logo to="#"> <h1>Instagram</h1></Logo>
                        <Logo to="#"> <h1>Twitter</h1></Logo>
                    </DivFooter>

                    <p>Hotel Gatsby <span>Todos los derechos reservados &copy; </span> {year}</p>
                </HeaderTitulo>
            </div>
        </>
    );
}

export default Footer;
import React from 'react';
import { Link } from 'gatsby'
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;

    @media( min-width: 768px){
        margin-bottom: 0;
    }
`;

const LinkNav = styled(Link)`
    color: #fff;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    line-height: 1rem;
    margin-right: 1rem;

    &:last-of-type{
        margin-right: 0;
    }

    &.pagina-actual{
        border-bottom: 2px solid #fff;
    }
`;

const Navegacion = () => {
    return (  
        <>
            <div>
                <Nav>
                    <LinkNav activeClassName="pagina-actual" to="/" >Inicio</LinkNav>
                    <LinkNav activeClassName="pagina-actual" to="/habitaciones">Habitaciones</LinkNav>
                    <LinkNav activeClassName="pagina-actual" to="/nosotros">Nosotros</LinkNav>
                </Nav>
            </div>
        </>
    );
}

export default Navegacion;
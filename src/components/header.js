import React from 'react';
import styled from '@emotion/styled';
import Navegacion from './Navegacion';

const HeaderTitulo = styled.header`
    background-color: #333;
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
    return (  
        <>
            <div>
                <HeaderTitulo>
                    <DivTitulo>
                        <h1>Hotel Gatsby</h1>
                        
                        <Navegacion />
                    </DivTitulo>

                </HeaderTitulo>
            </div>
        </>
    );
}

export default Header;
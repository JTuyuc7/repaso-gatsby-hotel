import React from 'react';
import Layout from '../components/Layout';
import DetallesImagen from '../components/detalleImagen';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const DivContenido = styled.div`
    max-width: 1200px;
    margin: 3rem auto;

    @media(min-width: 480px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }

    @media( min-width: 768px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3rem;
    }
`;

const Habitaciones = () => {

    const data = useStaticQuery( graphql`
        query{
            allDatoCmsImagen{
                nodes{
                    titulo
                    precio
                    imagenes{
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    const { titulo } = data.allDatoCmsImagen.nodes[0];
    const imagenes = data.allDatoCmsImagen.nodes[0].imagenes;

    return (  
        <>
            <Layout>
                <h1
                    css={ css`
                        text-align: center;
                    `}
                >{titulo}</h1>
                    <DivContenido>
                        { imagenes.map( imagen => (
                            <DetallesImagen
                                key={imagen.gatsbyImageData.images.fallback.src}
                                imagen={ imagen }
                            />
                        )) }
                    </DivContenido>
            </Layout>
        </>
    );
}

export default Habitaciones;
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ContenidoDiv = styled.div`
    max-width: 1200px;
    width: 90%;
    padding: 2rem;
    margin: 0 auto;
    margin-bottom: 3rem;

    p{
        text-align: center;
        align-items: center;
        line-height: 2;
    }

    @media (min-width: 768px){
        display: grid; 
        grid-template-columns: repeat(2, 1fr);
        column-gap: 4rem;
    }
`;

const ContenidoInicio = () => {

    const respuesta = useStaticQuery( graphql `
        query{
            allDatoCmsPagina(filter:{ slug: { eq: "inicio" }}){
                nodes{
                    titulo
                    contenido
                    imagen{
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    //console.log( respuesta.allDatoCmsPagina.nodes[0] );
    const { titulo, contenido, imagen } = respuesta.allDatoCmsPagina.nodes[0];

    //const imagen = respuesta.allDatoCmsPagina.nodes[0].imagen.gatsbyImageData.images;
    return (  
        <>
            <h1 
                css={css`
                    text-align: center;
                    margin-top: 3rem;
                    font-size: 4rem;
                `}
                >{titulo}</h1>

            <div>
                <ContenidoDiv>
                    <p>{contenido}</p>

                    <GatsbyImage image={imagen.gatsbyImageData} alt="Imagen Inicio"/>
                                
                </ContenidoDiv>
            </div>
        </>
    );
}

export default ContenidoInicio;
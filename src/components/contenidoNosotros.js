import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';

const DivNosotros = styled.div`
    max-width: 1100px;
    margin: 5rem auto;
    width: 85%;

    p{
        line-height: 2;
        text-align: center;
        margin: 4rem 0;
    }

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }
`;

const ContenidoNosotros = () => {

    const resultado = useStaticQuery( graphql`
        query{
            allDatoCmsPagina(filter: { slug: { eq: "nosotros"}}){
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

    //console.log(resultado.allDatoCmsPagina.nodes[0]);
    const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0];

    return (  
        <>
            <h1
                css={ css`
                    text-align: center;
                    margin: 4rem 0;
                `}
            >{titulo}</h1>

            <DivNosotros>
                <GatsbyImage image={imagen.gatsbyImageData} alt="Imagen Inicio"/>

                <p>{contenido}</p>
            </DivNosotros>
        </>
    );
}

export default ContenidoNosotros;
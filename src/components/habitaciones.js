import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const DetallesDiv = styled.div`
    max-width: 1100px;
    margin: 4rem auto;
    width: 90%;

    span{
        font-weight: bold;
    }
`;

export const query = graphql`
    query($slug : String! ){
        allDatoCmsHabitacion( filter : { slug: { eq: $slug }}){
            nodes{
                titulo
                contenido
                fecha
                imagen{
                    gatsbyImageData
                }
                
            }
        }
    }
`;

const HabitacionTemplate = ({data}) => {

    console.log(data.allDatoCmsHabitacion)
    const { titulo, contenido, imagen, fecha } = data.allDatoCmsHabitacion.nodes[0];

    return (  
        <>
            <Layout>
                <div>
                    <h1
                        css={ css`
                            text-align: center;
                        `}
                    >{titulo}</h1>
                    <DetallesDiv>
                        <GatsbyImage image={ imagen.gatsbyImageData} alt="Imagen Habitacion" />

                        <p>{ contenido }</p>

                        <p> <span> Disponible a partir de: { fecha } </span> </p>
                    </DetallesDiv>
                </div>
            </Layout>
        </>
    );
}

export default HabitacionTemplate;
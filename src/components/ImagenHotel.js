import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImagenBackground = styled(BackgroundImage)`
    height: 600px;
`;

const TextoImagen = styled.div`
    background-image: linear-gradient( to top, rgba(34,49,63,.75), rgba(34,49,63,.75) );
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
        margin: 0 auto;
        h1{
            font-size: 4rem;
            margin: 0%;

            @media (min-width: 768px){
                font-size: 5.9rem;
            }
        }

        p{
            font-size: 2rem;
            @media (min-width: 768px){
                font-size: 2.7rem;
            }
        }
    }
`;

const ImagenHotel = () => {

    const { image } = useStaticQuery( graphql `
        query{
            image: file( relativePath : { eq: "10.jpg"}){
                sharp: childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    //console.log(image.sharp.fluid);
    return (  
        <>
            <ImagenBackground tag="section" fluid={ image.sharp.fluid } fadeIn="soft">
                <TextoImagen>
                    <div>
                        <h1>Bienvenido a Hotel Gatsby</h1>

                        <p>El mejor Hotel para pasar tus vacaciones, los mejores precios y la mejor comodidad</p>
                    </div>
                </TextoImagen>
            </ImagenBackground>
        </> 
    );
}

export default ImagenHotel;
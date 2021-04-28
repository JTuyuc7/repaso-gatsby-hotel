import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImagenBackground = styled(BackgroundImage)`
    height: 600px;
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

            </ImagenBackground>
        </> 
    );
}

export default ImagenHotel;
import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const DivImagen = styled.div`
    max-width: 1200px;
    margin: 2rem auto;
    width: 90%;
`;

const ImagenEstilo = styled(GatsbyImage)`
    height: 400px;

    @media(min-width: 480px){
        height: 200px;
    }
`;

const DetallesImagen = ({imagen}) => {

    const image = getImage(imagen.gatsbyImageData);

    return (  
        <>
            <DivImagen>
                <ImagenEstilo image={image} alt="Imagen Habitacion"  />
            </DivImagen>
        </>
    );
}

export default DetallesImagen;
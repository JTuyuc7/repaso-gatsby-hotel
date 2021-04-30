import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Boton = styled(Link)`
    display: block;
    background-color: #552363;
    padding: 1.5rem;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    font-family: 'PT Sans', sans-serif;
    width: 90%;
    margin: 0 auto;

    &:hover{
        background-color: #8c39a3;
    }
`;

const Contenedor = styled.div`
    margin: 5rem auto;
    width: 90%;
    border: 1px solid #e1e1e1;

    h3, p{
        text-align: center;
        width: 90%;
        margin: 2rem auto;
    }
    h3{
        font-size: 2.6rem;
    }
`;

const HabitacionPreview = (habitacion) => {

    //console.log(habitacion.habitacion)
    const { titulo, contenido, slug, imagen } = habitacion.habitacion;
    console.log(habitacion.habitacion.imagen.gatsbyImageData);
    return (  
        <>
            <Contenedor>

                <GatsbyImage image={ imagen.gatsbyImageData } alt="Imagen Habitacion" />

                <div>
                    <h3>{titulo}</h3>
                    <p>{contenido}</p>

                    <Boton to={slug}>Detalles Habitacion</Boton>
                </div>
            </Contenedor>
        </>
    );
}

export default HabitacionPreview;
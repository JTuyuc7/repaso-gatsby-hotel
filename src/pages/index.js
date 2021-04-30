import React from 'react';
import Layout from '../components/Layout';
import ImganHotel from '../components/ImagenHotel';
import ContenidoInicio from '../components/contenidoInicio';
import HabitacionPreview from '../components/habitacionPreview';
import UseHabitaciones from '../hooks/useHabitacion';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ListadoHabitaciones = styled.ul`

  max-width: 1200px;
  width: 90%;
  margin: 0 auto;

    @media( min-width: 480px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }

    @media( min-width: 768px){
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
`;

const IndexPage = () => {

  const habitaciones = UseHabitaciones();

  return(
    <>
      <Layout>
          <ImganHotel />

          <ContenidoInicio />

          <h2
            css={ css`
              text-align: center;
              margin-top: 4rem;
              font-size: 3.2rem;
            `}
          >Nuestras Habitaciones</h2>

          <ListadoHabitaciones>
            { habitaciones.map( habitacion => (
              <HabitacionPreview
                habitacion={habitacion}
                key={ habitacion.id}
              />
            ))}
          </ListadoHabitaciones>

      </Layout>
    </>
  )
}
export default IndexPage;

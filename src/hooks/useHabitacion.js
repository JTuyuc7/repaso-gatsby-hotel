import { graphql, useStaticQuery } from 'gatsby';

const UseHabitaciones = () => {

    const data = useStaticQuery( graphql`
        query{
            allDatoCmsHabitacion{
                nodes{
                    titulo
                    contenido
                    id
                    slug
                        imagen{
                            gatsbyImageData
                        }
                    }
                }
        }
    `);

    //console.log(data);

    /*return data.allDatoCmsHabitacion.nodes.map( habitacion => ({
        titulo: habitacion.titulo,
        contenido: habitacion.contenido,
        slug: habitacion.slug,
        imagen: habitacion.imagen.gatsbyImageData,
        id: habitacion.slug
    }))

    */
    return data.allDatoCmsHabitacion.nodes;

}

export default UseHabitaciones;
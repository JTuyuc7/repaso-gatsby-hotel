exports.createPages = async({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query{
            allDatoCmsHabitacion{
                    nodes{
                        slug
                }
            }
        }
    `);

    console.log(resultado.data.allDatoCmsHabitacion);
    
    if(resultado.errors) {
        reporter.panic('No hubo resultados ', resultado.errors);
    }

    //console.log(resultado.data)

    // Si la validacion pasa, crear las paginas dinamicas
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

    habitaciones.forEach( habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: habitacion.slug
            }
        })
    })

    /*habitaciones.forEach( habitacion => {                                    // Iterar en cada habitacion para crear las paginas
        actions.createPage({                                                 // Crear la Pagina unsando actions.createPage que es un metodo de gatsby
            path: habitacion.slug,                                           // El path, es de donde se tomara el id de la creacion de cada pagina
            component: require.resolve('./src/components/habitaciones.js'),  // El componente de donde se toma el archivo para crear las paginas
            context: {                                                       // Context
                slug: habitacion.slug
            }
        })
    })

    */

}
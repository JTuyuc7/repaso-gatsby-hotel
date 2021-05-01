import React from 'react';
import Header from './header';
import Footer from './footer';
import Helmet from 'react-helmet';
import { css } from '@emotion/react';
import { Global } from '@emotion/react';

const Layout = ( props ) => {
    return (  
        <>

            { /* Definir los estilos Globales */}
            <Global  
                styles={ css`
                    html{
                        font-size: 62.5%;

                        box-sizing: border-box;
                    }
                    *, *::before, *::after{
                        box-sizing: inherit
                    }
                    body{
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1, h2, h3{
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2{
                        font-family: 'Roboto', serif;
                    }
                    h3{
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />

            <Helmet>
                <title>Hotel Gatsby - Repaso</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" /> 
            </Helmet>

            <Header  />

            {props.children}

            <Footer  />
        </>
    );
}

export default Layout;
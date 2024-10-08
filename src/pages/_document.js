import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
                        rel="stylesheet"
                    />

                    <link
                        rel="preload"
                        href="/_next/static/media/image-home.webp"
                        as="image"
                        type="image/webp"
                    />
                    <link
                        rel="preload"
                        href="/_next/static/media/image-register.webp"
                        as="image"
                        type="image/webp"
                    />
                    <link
                        rel="preload"
                        href="/_next/static/media/image-login.webp"
                        as="image"
                        type="image/webp"
                    />
                </Head>
                <body className="antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

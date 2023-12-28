import type { FC } from "hono/jsx"

const Layout:FC<{ children?: JSX.Element[]|JSX.Element, head?: JSX.Element[]|JSX.Element }> = ({children, head}) => {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width" />
                {head}
            </head>
            <body>
                {children}
            </body>
        </html>

    )
}

export const Top:FC<{ messages: string[] }> = ({messages}) => {
    return (
        <Layout head={<title>탑</title>}>
            <h1>Hello Hono!</h1>
            <ul>
                {messages.map((message) => {
                    return <li>{message}!!</li>
                })}
            </ul>
        </Layout>
    )
}
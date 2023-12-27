import type { FC } from "hono/jsx"

const Layout:FC<{ children?: JSX.Element[]|JSX.Element }> = ({children}) => {
    return (
        <html>
            <body>{children}</body>
        </html>
    )
}

export const Top:FC<{ messages: string[] }> = ({messages}) => {
    return (
        <Layout>
            <h1>Hello Hono!</h1>
            <ul>
                {messages.map((message) => {
                    return <li>{message}!!</li>
                })}
            </ul>
        </Layout>
    )
}
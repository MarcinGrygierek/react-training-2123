import { useParams } from "react-router-dom"

const Color = () => {
    const { r, g, b } = useParams<{r: string, g: string, b: string}>();

    return <div style={{
        height: '100vh',
        width: '100%',
        backgroundColor: `rgba(${r}, ${g}, ${b})`
    }}></div>
}

export { Color }
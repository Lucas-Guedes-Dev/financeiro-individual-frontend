import React, { useEffect, useState } from "react";
import { Container, Description, Div1, Div2, LaunchButton } from "./style";


const Lacamentos: React.FC = () => {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        console.log(text)
    }, [text])

    return (
        <Container>
            <Div1>
                <Description value={text} onChange={(event) => setText(event?.target.value)} />
            </Div1>
            <Div2>
                <LaunchButton>Exemplo</LaunchButton>
            </Div2>
        </Container>
    )
}

export default Lacamentos;
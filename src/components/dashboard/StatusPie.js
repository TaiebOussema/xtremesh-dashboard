import React from 'react'
import { VictoryPie } from 'victory';


const StatusPie = () => {
    return (
        <VictoryPie 
            colorScale={["lightgreen", "tomato"]}
            height={300}
            data={[
                { x: "Up", y: 19 },
                { x: "Down", y: 15 },
            ]}
            labels={({ datum }) => `${datum.x}: ${datum.y}`}  
            
        />
    )
}

export default StatusPie

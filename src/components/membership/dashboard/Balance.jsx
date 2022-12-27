import React, { useEffect } from 'react'
import { VictoryPie, VictoryTheme, VictoryLabel } from 'victory'

const Balance = () => {

    useEffect(() => {
        fetch('https://server.cryptosignal.metrdev.com/api/v1/exchange/balance', {
            Authorization: localStorage.getItem('accessToken')
        }).then(res => {
            return res.json()
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <svg width={250} height={250}>
                <VictoryPie
                    standalone={false}
                    width={250}
                    height={250}
                    padAngle={3}
                    innerRadius={80}
                    data={[{ x: 1, y: 1 }]}
                    colorScale={["#01C063", "#4B4190", "#02695C"]}
                    labels={() => null}
                />
                <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    style={[
                        {
                            fontSize: 35,
                            color: "#28323B",
                            fontWeight: "600",
                            lineHeight: 40
                        },
                        { fontWeight: "600", fontSize: 16 }
                    ]}
                    x={250 * 0.5}
                    y={250 * 0.525}
                    text={["$0.00", "Total Balance"]}
                />
            </svg>
        </div>
    )
}

export default Balance
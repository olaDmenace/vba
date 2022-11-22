import React from 'react'
import { VictoryPie, VictoryTheme, VictoryLabel } from 'victory'

const Dashboard = () => {
    return (
        <div>
            <div className='grid gap-5 md:flex'>
                <div className='text-white/70 grid gap-5 md:gap-0'>
                    <h3>My Wallet</h3>
                    <h6>Your profile is almost complete!</h6>
                    <button className='rounded h-12 px-5 hover:bg-[#66BBDC] text-white bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>Connect Exchange Wallet</button>
                </div>
                <div className='mx-auto'>
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
            </div>
        </div>
    )
}

export default Dashboard
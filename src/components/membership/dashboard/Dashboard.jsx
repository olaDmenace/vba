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
            <div className='text-white/70 space-y-6'>
                <h3>Trade Managers</h3>
                <div className='md:flex'>
                    <div className='border rounded divide-y lg:basis-1/2'>
                        <div className='p-5 space-y-2'>
                            <h3>Trades</h3>
                            <p>Trade Managr Signal Groups You Manage</p>
                        </div>
                        <div className='p-5 space-y-10'>
                            <h5>Welcome Johnson</h5>
                            <p>You do not manage any group yet. You could become a trade manager by creating signal groups</p>
                            <button className='border h-12 px-4 rounded border-primary hover:bg-primary active:bg-primary-dark ease-in-out transition-colors duration-500'>Become a Trade Manager</button>
                        </div>
                    </div>
                    <div className='basis-1/2 grid items-center justify-items-center h-60 md:h-auto'>
                        <p className='text-primary hover:text-primary-light active:text-primary-dark'>Become a Trade Manager</p>
                        <p>Or</p>
                        <p className='text-primary hover:text-primary-light active:text-primary-dark'>Connect With Other Trade Managers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
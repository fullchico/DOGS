import React, { useEffect, useState } from 'react'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'
import styles from './UserStatsGraphs.module.css'
const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0)


  useEffect(() => {
    const graphData = data.map(item => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })
    setGraph(graphData)
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    )


  }, [data])

  // Impotando biblioteca de graphicos
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>

      {graph.length === 0 ? (
       ''
      )
        : ( 
          <>
          <div className={styles.graphItem}>
          <VictoryPie data={graph} innerRadius={50} padding={
          {
            top: 20,
            botton: 20,
            left: 80,
            right: 80,
          }
        } style={{
          data: {
            fillOpacity: 0.9,
            stroke: '#fff',
            strokeWidth: 2,
          },
          labels: {
            fontSize: 14,
            fill: '#333'
          }
        }} />
      </div>

      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
        </>
        )
      }

    </section>
  )
}

export default UserStatsGraphs

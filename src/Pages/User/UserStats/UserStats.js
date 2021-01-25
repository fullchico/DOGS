import React, { lazy, Suspense, useEffect } from 'react'
import Error from '../../../Helper/Error/Error'
import Head from '../../../Helper/Head/Head'
import Loading from '../../../Helper/Loading/Loading'
import UseFetch from '../../../Hooks/useFetch/useFetch'
import { STATS_GET } from '../../../services/api'

const UserStatsGraphs = lazy(() => import('../../../Components/Graphs/UserStatsGraphs/UserStatsGraphs'))

const UserStats = () => {
 

  const { data, error, loading, request } = UseFetch();

  useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token');
      const { url, options } = STATS_GET(token);
      await request(url, options)
    }
    getData();
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data) {
    return (
      <Suspense fallback={<div></div>}>
        <Head title='Minhas Estatisticas' />
        <UserStatsGraphs data={data}/>
      </Suspense>
    )
  }
  else return null
}

export default UserStats

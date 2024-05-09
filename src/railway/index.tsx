'use client'

import { useQuery } from '@apollo/client'

import { getProjectData } from '@/railway/queries/getProjectData'

const RailwayDashboard: React.FC = () => {
  const { loading, error, data } = useQuery(getProjectData, {
    variables: {
      id: '3282a173-83c1-4dec-a1a2-cfabf3000b11',
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return <div>{JSON.stringify({ data })}</div>
}

export default RailwayDashboard

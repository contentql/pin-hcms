'use client'

import { useQuery } from '@apollo/client'

import { getProjectData } from '@/railway/queries/getProjectData'

const RailwayDashboard: React.FC = () => {
  const { loading, error, data } = useQuery(getProjectData, {
    variables: {
      id: 'eb6b7e2b-fc8a-48b9-a1b8-d514874a0939',
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return <div>{JSON.stringify({ data })}</div>
}

export default RailwayDashboard

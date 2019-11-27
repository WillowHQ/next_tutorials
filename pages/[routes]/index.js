import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { routeList } from '../../lib/routeList'

const Routes = (props) => {
  const [routesHook, setRoutesHook] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    const { routes } = router.query

    if (routeList.includes(routes)) {
      setRoutesHook(routes)
    }
    setLoading(false)
  })
  if (routesHook)
    return (
      <p>
        {routesHook} Dynamic
      </p>
    )
  if (loading) return <p >Loading...</p>
  return <p>404</p>
}
export default Routes

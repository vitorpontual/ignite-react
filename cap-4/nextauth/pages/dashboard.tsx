import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { api } from "../service/apiClient"
import { setupAPICLient } from "../service/api"
import { withSSRAuth } from "../utils/withSSRAuth"
import { AuthTokenError } from "../service/errors/AuthTokenError"
import { destroyCookie } from "nookies"
import { useCan } from "../hooks/useCan"
import { Can } from "../components/Can"

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext)

 

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      <button onClick={signOut}>Sign out</button>

      <Can permissions={['metrics.list']}>
        <div>Metrics</div>
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPICLient(ctx);
  const response = await apiClient.get('/me');

  return {
    props: {

    }
  }
})
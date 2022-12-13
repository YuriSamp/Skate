import { useRouter } from "next/router"
import NavBar from "../../components/NavBar"

const Produto = () => {
  const router = useRouter()
  const {id} = router.query

  return (
    <>
    <NavBar/>
    <p>Produto: {id}</p>
    </>
  )
}
export default Produto
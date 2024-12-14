import { useStore } from "../hook/generalstore"

const ShowCount = () => {

    const {bears}=useStore()
  return (
    <div>ShowCount:{bears}</div>
  )
}

export default ShowCount
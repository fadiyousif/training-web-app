import { useState } from "react"
import { Gym } from "./Gym"
import { Pagination } from "./Pagination"

export const GymsList = ({ gyms }) => {
  const [page, setPage] = useState(0)

  const gymsPerPage = 10
  const pagesVisited = page * gymsPerPage

  const renderGyms = gyms
    .slice(pagesVisited, pagesVisited + gymsPerPage)
    .map((gym) => <Gym gym={gym} key={gym.id} />)

  return (
    <>
      <ul className="gyms-list">{renderGyms}</ul>

      {gyms.length > 10 && (
        <Pagination
          itemsLength={gyms.length}
          itemsPerPage={gymsPerPage}
          setPage={setPage}
        />
      )}
    </>
  )
}

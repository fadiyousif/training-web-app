import { useState } from "react"
import moment from "moment/moment"
import { TrainingSession } from "./TrainingSession"
import { Pagination } from "./Pagination"

export const TrainingSessionsList = ({ sessions, date }) => {
  const [page, setPage] = useState(0)

  const sessionsPerPage = 5
  const pagesVisited = page * sessionsPerPage

  const renderSessions = sessions
    .filter((session) => moment(session.duration.start).format("L") === date)
    .slice(pagesVisited, pagesVisited + sessionsPerPage)
    .map((session) => <TrainingSession session={session} key={session.id} />)

  const sessionsLength = sessions.filter(
    (session) => moment(session.duration.start).format("L") === date
  ).length

  return (
    <>
      <ul>{renderSessions}</ul>

      {sessionsLength > 5 && (
        <div
          onClick={(event) => event.stopPropagation()}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Pagination
            itemsLength={sessionsLength}
            itemsPerPage={sessionsPerPage}
            setPage={setPage}
          />
        </div>
      )}
    </>
  )
}

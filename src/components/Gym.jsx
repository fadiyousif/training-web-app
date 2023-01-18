import { useState } from "react"
import moment from "moment/moment"
import { TrainingSessionsList } from "./TrainingSessionsList"
import { DatePicker } from "./DatePicker"
import { Loader } from "./Loader"

export const Gym = ({ gym }) => {
  const { street, postalCode, city } = gym.address

  const [isSelected, setIsSelected] = useState(false)
  const [hasBeenSelected, setHasBeenSelected] = useState(false)
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState(moment().format("L"))
  const [sessions, setSessions] = useState([])

  const handleClick = () => {
    setIsSelected((isSelected) => !isSelected)

    if (!hasBeenSelected) {
      setHasBeenSelected(true)
      setLoading(true)
      fetchUpcomingSessions()
    }
  }

  const fetchUpcomingSessions = () => {
    const today = new Date()
    const nextWeek = new Date(
      today.getTime() + 7 * 24 * 60 * 60 * 1000
    ).toISOString()

    fetch(
      `https://stc.brpsystems.com/brponline/api/ver3/businessunits/${
        gym.id
      }/groupactivities?period.start=${today.toISOString()}&period.end=${nextWeek}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSessions(data)
        setLoading(false)
      })
      .catch((err) => console.error(err))
  }

  return (
    <li className="gym" onClick={handleClick}>
      <h2 style={{ marginBottom: 10, fontSize: 20 }}>{gym.name}</h2>

      {isSelected && (
        <>
          <h3>
            <span className="subtitle">Gym: </span>
            <span>{gym.company.name}</span>
          </h3>
          <div>
            <span className="subtitle">Address: </span>
            <span>{street}</span>
          </div>
          <div>
            {postalCode} {city}
          </div>

          <DatePicker date={date} setDate={setDate} />

          {loading && <Loader />}

          <TrainingSessionsList sessions={sessions} date={date} />
        </>
      )}
    </li>
  )
}

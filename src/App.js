import { useEffect, useState } from "react"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { DropDown } from "./components/DropDown"
import { GymsList } from "./components/GymsList"

export const App = () => {
  const [gyms, setGyms] = useState([])
  const [allGyms, setAllGyms] = useState([])

  useEffect(() => {
    fetch("https://stc.brpsystems.com/brponline/api/ver3/businessunits")
      .then((res) => res.json())
      .then((data) => {
        setGyms(data)
        setAllGyms(data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className="app">
        <h1 style={{ marginBottom: 40 }}>Training Web App</h1>
        <DropDown allGyms={allGyms} setGyms={setGyms} />
        <GymsList gyms={gyms} />
      </div>
    </LocalizationProvider>
  )
}

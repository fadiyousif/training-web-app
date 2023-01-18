import { useState } from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

export const DropDown = ({ allGyms, setGyms }) => {
  const [gym, setGym] = useState("all")

  const handleChange = ({ target }) => {
    setGym(target.value)

    if (target.value === "all") {
      setGyms(allGyms)
    } else {
      setGyms(allGyms.filter((gym) => gym.name === target.value))
    }
  }

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
      <InputLabel>Gym</InputLabel>
      <Select value={gym} label="Gym" onChange={handleChange} autoWidth>
        <MenuItem value="all">All</MenuItem>
        {allGyms.map(({ name, id }) => (
          <MenuItem value={name} key={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export const TrainingSession = ({ session }) => {
  const { duration, instructors, slots, name } = session

  const calculateBookedPercentage = (totalBookable, leftToBook) => {
    const value =
      ((totalBookable - leftToBook) / totalBookable).toFixed(1) * 100

    return `${value}% booked`
  }

  return (
    <li style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginRight: 100 }}>
          <div className="subtitle">
            {duration.start.split("T")[1].slice(0, 5)} -{" "}
            {duration.end.split("T")[1].slice(0, 5)}
          </div>

          <h4>{name}</h4>

          {instructors.length === 1 ? (
            <div>Instructor: {instructors[0].name}</div>
          ) : instructors.length > 1 ? (
            <div>
              Instructors
              {instructors.map(({ name }, index, arr) =>
                index !== arr.length - 1 ? `${name}, ` : name
              )}
            </div>
          ) : null}
        </div>

        <div style={{ textAlign: "right" }}>
          <div>
            {slots.leftToBook} slots left of {slots.totalBookable}
          </div>
          <div>
            {calculateBookedPercentage(slots.totalBookable, slots.leftToBook)}
          </div>
        </div>
      </div>
    </li>
  )
}

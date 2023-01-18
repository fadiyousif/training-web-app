export const TrainingSession = ({ session }) => {
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
            {session.duration.start.split("T")[1].slice(0, 5)} -{" "}
            {session.duration.end.split("T")[1].slice(0, 5)}
          </div>

          <h4>{session.name}</h4>

          {session.instructors.length === 1 ? (
            <div>Instructor: {session.instructors[0].name}</div>
          ) : session.instructors.length > 1 ? (
            <div>
              Instructors
              {session.instructors.map(({ name }, index, arr) =>
                index !== arr.length - 1 ? `${name}, ` : name
              )}
            </div>
          ) : null}
        </div>

        <div style={{ textAlign: "right" }}>
          <div>
            {session.slots.leftToBook} slots left of{" "}
            {session.slots.totalBookable}
          </div>
          <div>
            {calculateBookedPercentage(
              session.slots.totalBookable,
              session.slots.leftToBook
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

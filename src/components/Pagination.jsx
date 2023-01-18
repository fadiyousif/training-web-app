import ReactPaginate from "react-paginate"

export const Pagination = ({ itemsLength, itemsPerPage, setPage }) => {
  const pageCount = Math.ceil(itemsLength / itemsPerPage)

  const changePage = ({ selected }) => {
    setPage(selected)
  }

  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageCount={pageCount}
      onPageChange={changePage}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      containerClassName="paginationButtons"
      previousLinkClassName="previousButton"
      nextLinkClassName="nextButton"
      disabledClassName="paginationDisabled"
      activeClassName="paginationActive"
    />
  )
}

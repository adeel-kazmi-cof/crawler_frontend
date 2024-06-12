import React from 'react';
import { Row, Col, Form, Pagination } from 'react-bootstrap';

const recordPerPage = [10, 25, 50, 100];

const Paginate = ({ pages, currentPage, totalPages, perPage, totalRecords, handlePageChange, handlePerPage }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        handlePerPage(value);
    };

    const renderPaginationItems = () => {
        const paginationItems = [];

        // Render the first page
        if (pages) {
            paginationItems.push(
                <Pagination.Item
                    key={1}
                    onClick={() => handlePageChange(1)}
                    active={currentPage === 1}
                >
                    1
                </Pagination.Item>
            );
        }

        // Render ellipsis if there's a gap after the first page
        if (currentPage > 3) {
            paginationItems.push(<Pagination.Ellipsis key="start-ellipsis" />);
        }

        // Render pages around the current page
        for (let page = Math.max(2, currentPage - 2); page <= Math.min(totalPages - 1, currentPage + 2); page++) {
            paginationItems.push(
                <Pagination.Item
                    key={page}
                    onClick={() => handlePageChange(page)}
                    active={currentPage === page}
                >
                    {page}
                </Pagination.Item>
            );
        }

        // Render ellipsis if there's a gap before the last page
        if (currentPage < totalPages - 2) {
            paginationItems.push(<Pagination.Ellipsis key="end-ellipsis" />);
        }

        // Render the last page
        if (totalPages > 1) {
            paginationItems.push(
                <Pagination.Item
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    active={currentPage === totalPages}
                >
                    {totalPages}
                </Pagination.Item>
            );
        }

        return paginationItems;
    };

    return (
        <div className="pagination-wrap">

            <div  className="pagination-left">
                <span className=''>
                    Show
                    <Form.Select name="per_page" onChange={handleChange} defaultValue={perPage}>
                        {recordPerPage.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </Form.Select>
                    entries
                </span>

                <span> Showing {((currentPage - 1) * perPage) + 1} to {Math.min(currentPage * perPage, totalRecords)} of {totalRecords} entries</span>
            </div>

            <div className="pagination-right">
                <Pagination>
                    <Pagination.Prev
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    />
                    {renderPaginationItems()}
                    <Pagination.Next
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    />
                </Pagination>
            </div>
        </div>
    );
};

export default Paginate;

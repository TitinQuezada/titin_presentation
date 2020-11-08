export const getPageNumbers = (documentsNumber, pageSize) => {
    const minimunPageNumber = 1;
    const pagesNumber = documentsNumber / pageSize;

    if (pagesNumber <= minimunPageNumber) {
        return minimunPageNumber;
    }

    return Math.ceil(pagesNumber);
};
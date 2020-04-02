const cellComponent = (function () {

    function createCell(rowElem, text, clas) {
        const element = document.createElement('div');
        if (clas) {
            element.classList.add(clas)
        }
        element.innerHTML = text
        rowElem.append(element)
    }

    return {
        create: createCell
    }
})()
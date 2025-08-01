function createGrid(size) { //создаем сетку
    const container = document.getElementById('container'); //ищем контейнер
    container.innerHTML = ""; //очищаем html-сетку

    const cellSize = 800 / size; //размер одной клетки; динамическое масштабирование для ровного заполнения контейнера

    for (let i = 0; i < size * size; i++) { //цикл создания клеток
        const cell = document.createElement('div'); //создаём новый div-клетку
        cell.classList.add('grid-cell'); //применяем grid-cell из css
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
    

    cell.addEventListener('mouseover', () => { //при наведении на клетку она окрасится в черный
        cell.style.backgroundColor = 'black';
    });

    container.appendChild(cell); //клетка будет внутри контейнера
}
}

createGrid (16); // функция с 16ю клетками
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
        cell.style.backgroundColor = getRandomRGB(); //теперь будет случайный цвет, был черный
        //забыл () после getRandomRGB. полчаса поиска почему курсор не окрашивает клетку.
    });

    container.appendChild(cell); //клетка будет внутри контейнера
}
}
//берем рандомное число от 0 до числа стремящегося к 1, умножаем на рандомное значение из 256 оттенков
//делаем это для красного, зеленого и синего, смешиваем их и полученный результат возвращаем в mouseover
function getRandomRGB () { 
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

createGrid (16); // функция с 16ю клетками

//сбрасываем клетки
document.getElementById('clear').addEventListener('click', () => { //находим кнопку и запускаем кликом
    const cells = document.querySelectorAll('.grid-cell'); //находим все все клетки и объединяем в общее cells
    cells.forEach(cell => {
        cell.style.backgroundColor = ''; //в cells перебрали и очистили каждую клетку
    });
});

document.getElementById('reset').addEventListener('click', () => { //нашли кнопку, запустили кликом
    let size = prompt('Введи кол-во клеток (не более 100):'); //опечатка в prompt, снова поиски
    size = parseInt(size);
    
    if (isNaN(size) || size < 1 || size > 100) {
        //если ввел не число, либо же число меньше 1 либо больше 100 делаем замечание и прерываем функцию
        alert('Можно только от 1 до 100');
        return;
    }

    createGrid(size);
})
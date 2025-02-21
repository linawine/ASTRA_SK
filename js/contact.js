document.addEventListener('DOMContentLoaded', () => {
    const todayElement = document.querySelector('.selector-day__today');
    const workHoursElement = document.querySelector('.selector-day__work-hours');
    const dropdownMenu = document.querySelector('.selector-day__dropdown-menu');
    const dropdownItems = dropdownMenu.querySelectorAll('li');
    const dropdownImage = document.querySelector('.selector-day__dropdown-image');

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            const selectedDay = item.dataset.day;
            const selectedHours = item.dataset.hours;
            todayElement.textContent = selectedDay;
            todayElement.dataset.day = selectedDay;
            workHoursElement.textContent = selectedHours;
            workHoursElement.dataset.hours = selectedHours;
            dropdownMenu.style.display = 'none';
        });
    });

    dropdownImage.addEventListener('mouseover', () => {
        dropdownMenu.style.display = 'block';
    });

    document.addEventListener('mouseup', (event) => { 
        if (!dropdownImage.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});

document.onclick = function (event) {
    var target = event.target;
    if (target.tagName === 'IMG') {
        target = target.parentNode;
    }

    var id = target.getAttribute('data-toggle-id');
    if (!id) return;

    var elem = document.getElementById(id);
    if (elem) {
        if (elem.style.display === 'none' || elem.style.display === '') {
            elem.style.display = 'block';
        } else {
            elem.style.display = 'none';
        }
    }
};
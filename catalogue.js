function goToBike () {
    window.location.href = 'bike.html';
} 

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener('click', goToBike);
});


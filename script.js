const btndark = document.getElementById('btndark');
btndark.addEventListener('click', function onclick(event) {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
})

const btngray = document.getElementById('btngray');
btngray.addEventListener('click', function onclick(event) {
    document.body.style.backgroundColor = '#F2F2F2'
    document.body.style.color = 'black'
})
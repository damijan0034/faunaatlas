const allEng = document.getElementById('alleng')
const allSrb = document.getElementById('allsrb')

const engBtn = document.getElementById('engbtn')
const srbBtn = document.getElementById('srbbtn')

srbBtn.onclick = () => {
    allEng.classList.add('hidden')
    allSrb.classList.remove('hidden')

    srbBtn.classList.add('hidden')
    engBtn.classList.remove('hidden')
}

engBtn.onclick = () => {
    allSrb.classList.add('hidden')
    allEng.classList.remove('hidden')

    engBtn.classList.add('hidden')
    srbBtn.classList.remove('hidden')
}




// const allEng = document.getElementById('alleng')
// const allSrb = document.getElementById('allsrb')

// const engBtn = document.getElementById('engbtn')
// const srbBtn = document.getElementById('srbbtn')

// const errorEng = document.getElementById('kompweng')
// const errorSrb = document.getElementById('kompwsrb')

// srbBtn.onclick = () => {
//     allEng.classList.add('hidden')
//     allSrb.classList.remove('hidden')

//     srbBtn.classList.add('hidden')
//     engBtn.classList.remove('hidden')
// }

// engBtn.onclick = () => {
//     allSrb.classList.add('hidden')
//     allEng.classList.remove('hidden')

//     engBtn.classList.add('hidden')
//     srbBtn.classList.remove('hidden')
// }



const allEng = document.getElementById('alleng')
const allSrb = document.getElementById('allsrb')

const engBtn = document.getElementById('engbtn')
const srbBtn = document.getElementById('srbbtn')

const errorEng = document.getElementById('kompweng')
const errorSrb = document.getElementById('kompwsrb')

srbBtn.onclick = () => {
    allEng.classList.add('hidden')
    allSrb.classList.remove('hidden')

    errorEng.style.display = 'none'
    errorSrb.style.display = 'flex'

    srbBtn.classList.add('hidden')
    engBtn.classList.remove('hidden')
}

engBtn.onclick = () => {
    allSrb.classList.add('hidden')
    allEng.classList.remove('hidden')

    errorSrb.style.display = 'none'
    errorEng.style.display = 'flex'

    engBtn.classList.add('hidden')
    srbBtn.classList.remove('hidden')
}

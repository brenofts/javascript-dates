const btnNow = document.getElementById('now')
const btnThisDay = document.getElementById('thisDay')
const list = document.getElementById('list')
const day = document.getElementById('day')
const mdnLink = document.getElementById('mdnLink')
const gitHub = document.getElementById('gitHub')


const propertyNames = Object.getOwnPropertyNames(Date.prototype)
const dateMethods = propertyNames.sort()
//const dateMethods = x.sort((a, b) => a.localeCompare(b))
dateMethods.shift()
dateMethods.pop()

btnNow.addEventListener('click', e => {
    e.preventDefault()
    list.innerHTML = `<p id="today"></p>`
    document.getElementById('today').innerHTML = new Date().toUTCString()
    for (let index = 0; index < dateMethods.length; index++) {
        const element = dateMethods[index]
        if (!element.includes('set')){
            if (!element.includes('getYear')){
                const method = 'new Date().' + element + '()'
                const line = `<h2> ${method} &#187; <span id="${element}"></span></h2>`
                list.innerHTML += line
                const result = document.getElementById(element)
                result.innerHTML = eval(method)
            }
        }
    }
})

btnThisDay.addEventListener('click', e => {
    e.preventDefault()
    list.innerHTML = `<p id="today"></p>`
    document.getElementById('today').innerHTML = new Date(day.valueAsNumber).toUTCString()
    for (let index = 0; index < dateMethods.length; index++) {
        const element = dateMethods[index]
        if (!element.includes('set')){
            if (!element.includes('getYear')){
                const method = 'new Date(' + day.valueAsNumber +').' + element + '()'
                const line = `<h2> ${method} &#187; <span id="${element}"></span></h2>`
                list.innerHTML += line
                const result = document.getElementById(element)
                result.innerHTML = eval(method)
            }
        }
    }
})

mdnLink.addEventListener('click', e => {
    e.preventDefault()
    window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date', '_blank')
    window.focus()
})

gitHub.addEventListener('click', e => {
    e.preventDefault()
    window.open('https://github.com/brenofts/javascript-dates.git', '_blank')
    window.focus()
})


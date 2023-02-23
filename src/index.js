import '../index.css'
import JS_IMAGE from '../assets/javascript.png'
console.log('Hello world')

const jsImageHTML = document.createElement('img')
jsImageHTML.src = JS_IMAGE
jsImageHTML.className = 'js-image'

document.body.append(jsImageHTML)
'use strict';

let header = document.getElementsByTagName('header')[0]
let nav = document.getElementsByTagName('nav')[0]
let navSpan = nav.getElementsByTagName('span')[0]





function openNav() {
	if (document.documentElement.clientWidth < 778 && pageYOffset >= nav.clientHeight + header.clientHeight) {
		nav.style.transform = "translateY(132px)"
		//nav.style.top = '0'
		navSpan.setAttribute('onclick', 'closeNav()')
	} 
}

function closeNav() {
	if (document.documentElement.clientWidth < 778) {
		nav.style.transform = "translateY(0px)"
		//nav.style.top = '-132px'
		navSpan.setAttribute('onclick', 'openNav()')
	} 
}


function scrollToBlock(block) {
	document.getElementById(block).scrollIntoView({block: "start", behavior: "smooth"})

	if (document.documentElement.clientWidth < 778) {
		nav.style.transform = "translateY(0px)"
		//nav.style.top = '-132px'
		navSpan.setAttribute('onclick', 'openNav()')
	} 
}

function autoClose() {
	if (document.documentElement.clientWidth < 778  && pageYOffset < nav.clientHeight + header.clientHeight) {
		nav.style.transform = "translateY(0px)"
		//nav.style.top = '-132px'
		navSpan.setAttribute('onclick', 'openNav()')		
	}
}








// Поиск совпадений
var inputRegular = document.querySelector('input')
inputRegular.addEventListener('blur', clear)

var text = document.getElementById('text')
var oldText = text.textContent

function find(elim) {
	let newText

	if(elim.value.length === 0) {
		text.textContent = oldText
	}
	else if(elim.value.length === 1) {
		newText = text.textContent.split('')

		text.innerHTML = newText.map( (item) => {
			return item === elim.value ? `<b style="color:red;">${item}</b>` : item
		}).join('')
	} else if(elim.value.length > 1) {
		newText = text.textContent.split(/\s/gim)

		text.innerHTML = newText.map( (item) => {
			return item === elim.value || item === elim.value + "." || item === elim.value + "," ? `<b style="color:red;">${item}</b>` : item
		}).join(' ')		
	}

	if(text.textContent.indexOf(elim.value) === -1) {
		elim.style.color = "red"
	} else {
		elim.style.color = "black"
	}
}

function clear() {
	text.textContent = oldText
	inputRegular.value = ""
}







// Калькулятор
let x
let y
let operation

let textArea = document.getElementById('caption')




function pressing(elim) {
	textArea.value = textArea.value + elim.value
}

function delet() {
	textArea.value = ""
	textArea.placeholder = 0


	x = null
	y = null
	operation = ""
}


function pls() {
	y = null
	operation = "+"


	x = textArea.value
	textArea.value = ""
	textArea.placeholder = ""
}

function mns() {
	y = null
	operation = "-"
	

	x = textArea.value
	textArea.value = ""
	textArea.placeholder = ""
}

function mlt() {
	y = null
	operation = "*"

	x = textArea.value
	textArea.value = ""
	textArea.placeholder = ""
}

function shr() {
	y = null
	operation = "/"
	
	x = textArea.value
	textArea.value = ""
	textArea.placeholder = ""
}

function lst() {
	y = null
	operation = "%"
	
	x = textArea.value
	textArea.value = ""
	textArea.placeholder = ""
}



function reslt() {
	if (y === null) {

		y = textArea.value


		if(operation === "+") {
			textArea.value = Number(x) + Number(textArea.value)
		} else if(operation === "-") {
			textArea.value = Number(x) - Number(textArea.value)
		} else if(operation === "*") {
			textArea.value = Number(x) * Number(textArea.value) 
		} else if(operation === "/") {
			textArea.value = Number(x) / Number(textArea.value) 
		} else if(operation === "%")	{
			textArea.value = Number(x) % Number(textArea.value)
		}				
	} else {

		if(operation === "+") {
			textArea.value = Number(textArea.value) + Number(y)
		} else if(operation === "-") {
			textArea.value = Number(textArea.value) - Number(y)
		} else if(operation === "*") {
			textArea.value = Number(textArea.value) * Number(y) 
		} else if(operation === "/") {
			textArea.value = Number(textArea.value) / Number(y) 
		} else if(operation === "%")	{
			textArea.value = Number(textArea.value) % Number(y)
		}			
	}
}







//Калькулятор 2
let textArea2 = document.getElementById('caption2')


function pressing2(elim) {
	textArea2.value = textArea2.value + elim.value
}

function pressingOperation(elim) {
	if (elim.value === "(" || elim.value === ")") {
		textArea2.value = textArea2.value + elim.value
	} else {
		textArea2.value = textArea2.value + " " + elim.value + " "	
	}
}

function delet2() {
	textArea2.value = ""
	textArea2.placeholder = 0
}


function deletOne() {
	let value

	value = textArea2.value.split("")

	if(value[value.length - 1] === " ") {
		value.pop()
		value.pop()
		value.pop()
	} else {
		value.pop()
	}

	textArea2.value = value.join('')
}


function reslt2() {
	textArea2.value = eval(textArea2.value)
}










//Время

var date = new Date();


let sec = date.getSeconds()
let min = date.getMinutes()
let hour = date.getHours()

let day = date.getDate()
let mon = date.getMonth()
let year = date.getFullYear()

function timeIs(num) {
	if(num < 10) {
		num = 0 + String(num)
	}

	return num
}


document.getElementById("time").textContent = (timeIs(hour) + ":"+ timeIs(min) + ":" + timeIs(sec))
document.getElementById("date").textContent = (timeIs(day) + "." + timeIs((mon+1)) + "." + timeIs(year))


setInterval(t, 1000)

function t() {
	if(mon == 11 && day == 31 && hour == 23 && min == 59 && sec == 59) {
		mon = -1
		year += 1
	}

	if(day == 31 && hour == 23 && min == 59 && sec == 59) {
		day = 0
		mon += 1
	}

	if(hour == 23 && min == 59 && sec == 59) {
		hour = -1
		day += 1
	}


	if(min == 59 && sec == 59) {
		min = -1
		hour += 1
	}


	if(sec == 59) {
		sec = -1
		min += 1 
	}





	sec = sec + 1

	document.getElementById("time").textContent = (timeIs(hour) + ":"+ timeIs(min) + ":" + timeIs(sec))
	document.getElementById("date").textContent = (timeIs(day) + "." + timeIs((mon+1)) + "." + timeIs(year))
}










//Promise
let dang = (backgroundColor = "black", mr) => {
	return new Promise( (resolve, reject) => {
		document.getElementById('promise').disabled = true

		setTimeout( () => {
			document.getElementById('promise_title').style.color = backgroundColor
			resolve(1)
		}, mr)	
	})	
}



/* Через Async Await*/ 
// Надо ставить Await перед промисами, js перестает работать пока Await ждет промис 
async function play() {
	await dang('pink', 0)
	await dang('blue', 500)
	await dang('red', 500)
	await dang('orange', 500)
	await dang('violet', 500)
	await dang('black', 500)

	setTimeout( () => {
		document.getElementById('promise').disabled = false
	}, 500)	
}


/*
 //Цепочка промисов 
dang('purple', 0)
	.then( (value) => {
		return new Promise((resolve, reject) => { 
			setTimeout(() => {
				document.body.style.background = "blue"	
				resolve(++value)
			}, 500)
		});			
	})
	.then( (value) => {
		return new Promise((resolve, reject) => { 
			setTimeout(() => {
				document.body.style.background = "white"	
				resolve(++value)
			}, 500)
		});		
	})
	.then( (value) => {
		return new Promise((resolve, reject) => { 
			setTimeout(() => {
				document.body.style.background = "green"	
				resolve(++value)
			}, 500)
		});		
	})
	.then( (value) => {
		return new Promise((resolve, reject) => { 
			setTimeout(() => {
				document.body.style.background = "violet"	
				resolve(++value)
			}, 500)
		});		
	})
	.then( (value) => {
		return new Promise((resolve, reject) => { 
			setTimeout(() => {
				document.body.style.background = "yellow"	
				resolve(++value)
			}, 500)
		});
	})
	.then( (value) => {
		return new Promise((resolve, reject) => { 
			setTimeout(() => {
				document.body.style.background = "orange"	
				resolve(++value)
			}, 500)
		});	
	})
	.then( (value) => {
		return new Promise((resolve, reject) => { 
			setTimeout(() => {
				document.body.style.background = "pink"	
				resolve(console.log('Промисов в цепочке - ' + ++value))
			}, 500)
		});	
	})


function play() {
	Promise.all([dang('pink', 500), dang('blue', 1000), dang('red', 1500), dang('orange', 2000)]) // для параллельного выполнения промисов
	.then( () => {
		setTimeout( () => {
			document.body.style.background = 'linear-gradient(-45deg, #acb6e5,#86fde8)'
		}, 500)
	})
	.finally( () => {
		setTimeout( () => {
			document.getElementById('promise').disabled = false
		}, 500)
	})	
}
*/













// Запрос по API

/* рабоает только локально из-за http
const request = async (number, type) => {
	let res = await fetch(`http://numbersapi.com/${number}/${type}`)

	return await res.text()
}

form.addEventListener('submit', function(event) {
	event.preventDefault()

	let number = form.elements.number.value
	let type = form.elements.type.value

	if (number != "") {
		request(number, type)
			.then( response => {
				result.textContent = response
			})		
	}		
})
*/



/* без async await
function request(pokemon) {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then( response => {

		if (response.ok === false ) { 
			result.innerHTML = 'Not Correct'
		}		

		return response.json()
	})	
} 
*/

const request = async (pokemon) => {
	let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

	if (res.ok === false) { // if (res.status === 404 ) {
		result.innerHTML = 'Not Correct'
	}

	return res.json()
}

const form = document.getElementById('form')
const result = document.getElementById('result_api')

form.addEventListener('submit', function(event) {
	event.preventDefault()

	let pokemon = form.elements.pokemon.value

	if (pokemon != "") {
		request(pokemon.toLowerCase())
			.then( response => {
				result.innerHTML = `${response.name.toUpperCase()} <img src='${response.sprites.front_default}'>`
			})		
	}		
})













//Кординаты

let moveTeam = "white"
let isChosen = false


function chess(event) {
	let cell = event.target

	function move() {
		let figureChosen = document.getElementsByClassName('chosen')[0]
		let NameFigureChosen = figureChosen.getAttribute('figure')

		figureChosen.classList.remove('chosen')
		
		cell.innerHTML = figureChosen.outerHTML
		figureChosen.outerHTML = ''

		moveTeam = (moveTeam === "white" ? "black" : "white")
		isChosen = false		
	}


	function eat() {
		let figureChosen = document.getElementsByClassName('chosen')[0]
		let NameFigureChosen = figureChosen.getAttribute('figure')

		figureChosen.classList.remove('chosen')
		
		cell.outerHTML = figureChosen.outerHTML
		figureChosen.outerHTML = ''

		moveTeam = (moveTeam === "white" ? "black" : "white")
		isChosen = false		
	}	



	if (isChosen === false) {
		if (cell.hasAttribute("figure") === true && cell.getAttribute("team") === moveTeam) {
			cell.classList.add('chosen')
			isChosen = true
		} else {
			return
		}
	} else if(isChosen === true) {

		if (cell.hasAttribute('figure') === false) {
			move()
		} else if(cell.hasAttribute("figure") === true && cell.getAttribute("team") != moveTeam /*&& */) {
			eat()			
		}
	}
}












//Рандом

function random() {
	let min = document.getElementById('min')
	let max = document.getElementById('max')
	let result = document.getElementById('result_random')
	let button = document.getElementById('random_button')

	button.disabled = true

	function timer() {
	  	let rand = min.value - 0.5 + Math.random() * (max.value - min.value + 1);
	 	
	 	result.style.animationName = "randomTwo"
		
		setTimeout( () => {
			result.style.animationName = "random"
			result.textContent = Math.round(rand);
		}, 200)				
	}


	if (+min.value > +max.value) {
		result.textContent = "error"
		button.disabled = false
	} else if(+min.value + 4 > +max.value) {

		timer()

		setTimeout( () => {
			button.disabled = false
		}, 400)
	
	} else {

		let tick = setInterval(timer, 400)

		setTimeout( () => {
			clearInterval(tick)
			button.disabled = false
		}, 1900) 
	}

}















//Отправка формы
const postData =  async (url, data) => {
	let res = await fetch(url, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
		method: "POST",
		body: JSON.stringify(data) //data (если передаешь в формате FormData)
	})

	return res
}




let form2 = document.forms[1]

form2.addEventListener('submit', function(event) { 
	event.preventDefault()

	/**/
	let formData = {
		login: form2.login.value,
		password: form2.password.value,
		textarea: form2.textarea.value,
		select: form2.select.value,
		checkbox: form2.checkbox.checked,
		radio: form2.radio.value,
		file: form2.file.files, 
		time: form2.time.value, 
		color: form2.color.value, 
		range: form2.range.value, 
	}
		

	//let formData = new FormData(form2) - альтернатива варианта сверху

	//Способ проверить все ключи и значения
	/*
	for (var pair of formData.entries()) {
	    console.log(pair[0]+ ': ' + pair[1]); 
	}
	*/


	postData('https://jsonplaceholder.typicode.com/', formData)
	.then( (response) => {
		alert('Отправлено')
		console.log(response)
	}).catch( (response) => {
		alert('ошибка')
		console.log(response)
	})
})
















//Cортировка массивов
let arr = [
	{date: "08.04.122"},
	{date: "15.03.12112"},
	{date: "12.03.1960"},
	{date: "11.02.1920"},
	{date: "11.03.1360"},
	{date: "08.04.1197"},
	{date: "02.04.122"},
	{date: "15.04.12112"},
	{date: "12.12.1960"},
	{date: "10.02.1920"},
	{date: "11.03.1360"},
	{date: "08.04.1197"},

]








function sortDate(arr) {
	let copyArr = JSON.parse(JSON.stringify(arr))

	copyArr.map( (item) => {
		item.date = item.date.split('.')
	})

	copyArr.sort((a, b) => {
		if(+a.date[2] > +b.date[2]) {
			return 1
		} else if( +a.date[2] === +b.date[2]) {
			
			if(+a.date[1] > +b.date[1]) {
				return 1
			} else if( +a.date[1] === +b.date[1]) {
				return +a.date[0] > +b.date[0] ? 1 : -1
			} else {
				return -1
			}
			
		} else {
			return -1
		}
	})	

	copyArr.map( (item) => {
		item.date = item.date.join('.')
	})	



	copyArr.forEach( (item) => {
		document.getElementById('sort_date').innerHTML += `
		<div style="display:block; padding: 5px; font-size: 20px;">
			${item.date}
		</div>
		`
	})
}


sortDate(arr)







let arr2 = [{ratingRevievs: "21 отзыв", price: {oldUan: "4 333 грн", newUan: "3 799 грн"}, name: "Motorola MOTO G4 (XT1622) Black"}, {ratingRevievs: "1355 отзывов", price: "4 999 грн", name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!"}, {ratingRevievs: "1 отзыв", price: "5 199 грн", name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"}, {ratingRevievs: "3 отзыва", price: "4 349 грн", name: "Xiaomi Redmi Note 4X 3/32GB Black"}, {ratingRevievs: "488 отзывов", price: "6 199 грн", name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!"}, {ratingRevievs: "198 отзывов", price: {oldUan: "3 495 грн", newUan: "2 995 грн"}, name: "Lenovo K5 (A6020a40) Silver"}, {ratingRevievs: "352 отзыва", price: {oldUan: "9 799 грн", newUan: "7 999 грн"}, name: "Apple iPhone 5s 16GB Space Gray"}, {ratingRevievs: "59 отзывов", price: "5 999 грн", name: "Nokia 5 Dual Sim Tempered Blue"}, {ratingRevievs: "119 отзывов", price: "11 999 грн", name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!"}, {ratingRevievs: "1106 отзывов", price: "3 999 грн", name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!"}, {ratingRevievs: "380 отзывов", price: "2 199 грн", name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!"}, {ratingRevievs: "86 отзывов", price: {oldUan: "24 999 грн", newUan: "22 999 грн"}, name: "Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!"}, {ratingRevievs: "177 отзывов", price: "6 499 грн", name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!"}, {ratingRevievs: "347 отзывов", price: "4 299 грн", name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)"}, {ratingRevievs: "709 отзывов", price: "2 799 грн", name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!"}, {ratingRevievs: "527 отзывов", price: "3 999 грн", name: "Huawei Y6 Pro Gold + чехол + защитное стекло!"}, {ratingRevievs: "66 отзывов", price: "16 499 грн", name: "Apple iPhone 6s 32GB Gold"}, {ratingRevievs: "14 отзывов", price: "11 499 грн", name: "Apple iPhone 6 32GB Space Gray"}, {ratingRevievs: "70 отзывов", price: {oldUan: "7 399 грн", newUan: "5 999 грн"}, name: "Asus ZenFone 2 32GB (ZE551ML) Black"}, {ratingRevievs: "45 отзывов", price: "4 299 грн", name: "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!"}, {ratingRevievs: "376 отзывов", price: "3 899 грн", name: "Meizu M3 Note 32GB Grey (Международная версия)"}, {ratingRevievs: "111 отзывов", price: {oldUan: "9 999 грн", newUan: "7 999 грн"}, name: "Sony Xperia X Dual (F5122) White"}, {ratingRevievs: "40 отзывов", price: "2 222 грн", name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!"}, {ratingRevievs: "93 отзыва", price: "18 999 грн", name: "Apple iPhone 7 32GB Black"}, {ratingRevievs: "33 отзыва", price: "16 999 грн", name: "Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!"}, {ratingRevievs: "71 отзыв", price: {oldUan: "2 399 грн", newUan: "1 999 грн"}, name: "LG K5 X220ds Gold"}, {ratingRevievs: "39 отзывов", price: "2 995 грн", name: "Lenovo C2 Power (K10a40) Black"}, {ratingRevievs: "156 отзывов", price: "2 599 грн", name: "Nous NS 5006 Gold"}, {ratingRevievs: "40 отзывов", price: "19 689 грн", name: "LG G6 Mystic White"}, {ratingRevievs: "24 отзыва", price: "5 995 грн", name: "Motorola MOTO G5 (XT1676) Grey"}, {ratingRevievs: "7 отзывов", price: {oldUan: "10 999 грн", newUan: "9 999 грн"}, name: "HTC One X10 Dual Sim Silver"}, {ratingRevievs: "18 отзывов", price: {oldUan: "5 999 грн", newUan: "4 999 грн"}, name: "Sony Xperia L1 Dual Black"}]

let mass = document.getElementById('mass')



arr2.map( (key) => {
	let elim = document.createElement("div")
	elim.textContent = key.name
	elim.style.cssText = " padding: 20px; cursor: pointer; border: 1px dashed black; color: black; margin: 5px auto; font-weight: bold; transition: background 0.3s linear;"
	elim.setAttribute('class', 'hover')
	elim.setAttribute('onclick', "alr(this)");
	elim.review = key.ratingRevievs
	elim.price = typeof(key.price) === 'string' ? key.price : key.price.newUan
	mass.appendChild(elim)	
})



function alr(elim) {
	alert(elim.review + " | " + elim.price)
}





function sortByReview(arr) {
	let copyArr = JSON.parse(JSON.stringify(arr))

	copyArr.forEach( (item) => {
		item.ratingRevievs = +item.ratingRevievs.replace(/\D/g, '')
	})

	copyArr.sort((a, b) => {
		return	a.ratingRevievs > b.ratingRevievs ? 1 : -1
	})

	mass.innerHTML = ""
	
	copyArr.forEach( (item) => {
		item.ratingRevievs = item.ratingRevievs.toString()
		mass.innerHTML += `
			<div class="hover" style="padding: 20px; cursor: pointer; border: 1px dashed black; color: black; margin: 5px auto; font-weight: bold; transition: background 0.3s linear;">
				${item.name}
				<p>Цена: ${typeof(item.price) === 'string' ? item.price : item.price.newUan}.</p>
				<p>Отзывов: ${item.ratingRevievs}</p>
			</div>
		`
	})	
}






function sortByPrice(arr) {
	let copyArr = JSON.parse(JSON.stringify(arr))

	copyArr.forEach( (item) => {
		if(typeof(item.price) === 'string') {
			item.price = +item.price.replace(/\D/g, '')
		} else {
			item.price = +item.price.newUan.replace(/\D/g, '')
		}
	})

	copyArr.sort((a, b) => {
		return	a.price > b.price ? 1 : -1
	})	

	mass.innerHTML = ""
	
	copyArr.forEach( (item) => {
		item.price = item.price.toString().split('')

		if(item.price.length < 5) {
			item.price.splice(1, 0, " ")
		}
		else if(item.price.length > 4 || item.price.length < 7) {
			item.price.splice(2, 0, " ")
		}
		
		item.price = item.price.join("")
	
		mass.innerHTML += `
			<div class="hover" style="padding: 20px; cursor: pointer; border: 1px dashed black; color: black; margin-bottom: 10px; font-weight: bold; transition: background 0.3s linear;">
				${item.name}
				<p>Цена: ${item.price} грн.</p>
				<p>Отзывов: ${item.ratingRevievs}</p>
			</div>
		`
	})		
}











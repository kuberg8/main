"use strict";

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navSpan = nav.querySelector("span");
const navLinks = nav.querySelectorAll("a");

let isMobile = window.innerWidth < 778;

/////// listeners

window.addEventListener("resize", ({ target }) => {
  if (target.innerWidth < 778) isMobile = true;
  else isMobile = false;
});

// window.addEventListener("error", (err) => console.log(err));

//////

navSpan.addEventListener("click", () => {
  if (
    isMobile &&
    pageYOffset >= nav.clientHeight + header.clientHeight &&
    !nav.isOpen
  ) {
    nav.style.transform = `translateY(${nav.clientHeight}px)`;
    nav.isOpen = true;
  } else {
    nav.style.transform = "translateY(0px)";
    nav.isOpen = false;
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => scrollToBlock(link.innerHTML));
});

function scrollToBlock(block) {
  navSpan.click();

  document
    .getElementById(block)
    .scrollIntoView({ block: "start", behavior: "smooth" });
}

///////////////////////////////////////////////////////////////////////////////////////////////
// Поиск совпадений

const inputRegular = document.querySelector("input");
const text = document.getElementById("text");
const oldText = text.textContent;

inputRegular.addEventListener("blur", clear);
inputRegular.addEventListener("input", ({ target }) => find(target));

function find(elim) {
  if (!elim.value) {
    text.textContent = oldText;
  } else {
    let re = new RegExp(elim.value, "g");

    text.innerHTML = oldText.includes(elim.value)
      ? oldText.replace(re, `<b style="color:red;">${elim.value}</b>`)
      : text.innerHTML;
  }

  if (oldText.includes(elim.value)) {
    elim.style.color = "black";
  } else {
    elim.style.color = "red";
  }
}

function clear() {
  text.textContent = oldText;
  inputRegular.value = "";
}

///////////////////////////////////////////////////////////////////////////////////////////////
// Калькулятор

let x;
let y;
let operation;

const textArea = document.getElementById("caption");
const calculator1 = document.getElementById("calculator1");

calculator1.addEventListener("click", ({ target }) => {
  if (target.hasAttribute("isNumber")) {
    textArea.value += target.value;
  } else if (target.hasAttribute("isOperation")) {
    switch (target.value) {
      case "=":
        reslt();
        break;
      default:
        y = null;
        x = textArea.value;
        operation = target.value;
        textArea.value = "";
    }
  }
});

function reslt() {
  const count = (a, b) => {
    switch (operation) {
      case "+":
        textArea.value = Number(a) + Number(b);
        break;
      case "-":
        textArea.value = Number(a) - Number(b);
        break;
      case "*":
        textArea.value = Number(a) * Number(b);
        break;
      case "/":
        textArea.value = Number(a) / Number(b);
        break;
      case "%":
        textArea.value = Number(a) % Number(b);
        break;
    }
  };

  if (y === null) {
    y = textArea.value;
    count(x, textArea.value);
  } else {
    count(textArea.value, y);
  }
}

//Калькулятор 2
const textArea2 = document.getElementById("caption2");

calculator2.addEventListener("click", ({ target }) => {
  if (target.hasAttribute("isNumber")) {
    textArea2.value += target.value;
  } else if (target.hasAttribute("isOperation")) {
    switch (target.value) {
      case "=":
        textArea2.value = eval(textArea2.value);
        break;
      case "(":
        textArea2.value = textArea2.value + target.value;
        break;
      case ")":
        textArea2.value = textArea2.value + target.value;
        break;
      case "AC":
        textArea2.value = "";
        break;
      case "C":
        textArea2.value =
          textArea2.value.slice(-1) === " "
            ? textArea2.value.slice(0, -3)
            : textArea2.value.slice(0, -1);
        break;
      default:
        textArea2.value = textArea2.value + " " + target.value + " ";
    }
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////
//Время

setInterval(() => {
  let time = new Intl.DateTimeFormat("ru-ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(new Date());

  document.getElementById("date").textContent = time;
}, 1000);

///////////////////////////////////////////////////////////////////////////////////////////////
//Promise

let dang = (backgroundColor = "black", mr = 500) => {
  return new Promise((resolve) => {
    document.getElementById("promise_title").style.transitionDuration =
      mr + "ms";
    document.getElementById("promise_title").style.color = backgroundColor;

    setTimeout(() => {
      resolve(1);
    }, mr);
  });
};

/* Через Async Await*/
document.getElementById("promise").onclick = async () => {
  document.getElementById("promise").disabled = true;

  await dang("pink", 300);
  await dang("blue", 3000);
  await dang("red");
  await dang("orange", 1000);
  await dang("violet");
  await dang("white", 100);
  await dang("black", 100);
  await dang("white", 100);
  await dang("black");

  document.getElementById("promise").disabled = false;
};

//Цепочка промисов
// document.getElementById("promise").onclick = () => {
//   document.getElementById("promise").disabled = true;
//   dang("pink", 0).then(() =>
//     dang("blue")
//       .then(() => dang("red"))
//       .then(() => dang("orange"))
//       .then(() => dang("yellow"))
//       .then(() => dang("pink"))
//       .then(() => dang("black"))
//       .finally(() => (document.getElementById("promise").disabled = false))
//   );
// };

// Запрос по API
const request = async (pokemon) => {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  // or res.status === 404
  if (res.ok === false) {
    result.innerHTML = "Not Correct";
  }

  return res.json();
};

const form = document.getElementById("form");
const resultApi = document.getElementById("result_api");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let pokemon = form.elements.pokemon.value;

  if (pokemon != "") {
    request(pokemon.toLowerCase()).then((response) => {
      resultApi.innerHTML = `${response.name.toUpperCase()} <img src='${
        response.sprites.front_default
      }'>`;
    });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////
//Кординаты

let moveTeam = "white";
let isChosen = false;

function chess(event) {
  let cell = event.target;

  function move() {
    let figureChosen = document.getElementsByClassName("chosen")[0];
    let NameFigureChosen = figureChosen.getAttribute("figure");

    figureChosen.classList.remove("chosen");

    cell.innerHTML = figureChosen.outerHTML;
    figureChosen.outerHTML = "";

    moveTeam = moveTeam === "white" ? "black" : "white";
    isChosen = false;
  }

  function eat() {
    let figureChosen = document.getElementsByClassName("chosen")[0];
    let NameFigureChosen = figureChosen.getAttribute("figure");

    figureChosen.classList.remove("chosen");

    cell.outerHTML = figureChosen.outerHTML;
    figureChosen.outerHTML = "";

    moveTeam = moveTeam === "white" ? "black" : "white";
    isChosen = false;
  }

  if (isChosen === false) {
    if (
      cell.hasAttribute("figure") === true &&
      cell.getAttribute("team") === moveTeam
    ) {
      cell.classList.add("chosen");
      isChosen = true;
    } else {
      return;
    }
  } else if (isChosen === true) {
    if (cell.hasAttribute("figure") === false) {
      move();
    } else if (
      cell.hasAttribute("figure") === true &&
      cell.getAttribute("team") != moveTeam /*&& */
    ) {
      eat();
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
//Рандом

const min = document.getElementById("min");
const max = document.getElementById("max");
const resultRandom = document.getElementById("result_random");
const randomButton = document.getElementById("random_button");

randomButton.addEventListener("click", () => {
  randomButton.disabled = true;

  function timer() {
    return new Promise((resolve) => {
      let rand = min.value - 0.5 + Math.random() * (max.value - min.value + 1);

      resultRandom.style.animationName = "randomTwo";

      setTimeout(() => {
        resultRandom.style.animationName = "random";
        resultRandom.textContent = Math.round(rand);
        resolve();
      }, 200);
    });
  }

  if (+min.value > +max.value) {
    resultRandom.textContent = "error";
    randomButton.disabled = false;
  } else if (+min.value + 4 > +max.value) {
    timer().then(() => (randomButton.disabled = false));
  } else {
    let tick = setInterval(timer, 400);

    setTimeout(() => {
      clearInterval(tick);
      randomButton.disabled = false;
    }, 1900);
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////
// Саймон говорит

let box = document.getElementsByClassName("gameColor"); // массив цветов
let amount = box.length; // кол-во итераций в игре

function getMassRandom(arr = []) {
  let gameButton = document.getElementById("gameButton");
  let game = document.getElementById("game");

  document.getElementById("game_result").innerHTML = "";

  game.onclick = null;
  gameButton.disabled = true;

  if (arr.length === amount) {
    let sounds = document.getElementsByTagName("audio");
    let customizationTime = document.getElementById("customization");
    let time = +customizationTime.complexity.value;

    let i = 0;
    let j = 1;
    let color;

    setTimeout(function tick() {
      if (i === amount) {
        return null;
      }

      color = box[arr[i]].style.background;
      box[arr[i]].style.background = "green";
      box[arr[i]].number = box[arr[i]].number
        ? [...box[arr[i]].number, j]
        : [j];
      sounds[arr[i]].play();

      setTimeout(tick, time);
    }, time);

    setTimeout(function tick() {
      if (i === amount) {
        game.setAttribute("onclick", "game(event)");
        gameButton.disabled = false;
        return null;
      }

      box[arr[i]].style.background = color;
      sounds[arr[i]].pause();
      i++;
      j++;

      setTimeout(tick, time);
    }, time + time / 2);
  } else {
    let value = Math.round(0 - 0.5 + Math.random() * (3 - 0 + 1));
    if (arr.some((item) => item === value) && amount < 5) {
      getMassRandom(arr);
    } else {
      arr[0] && arr[arr.length - 1] === value ? null : arr.push(value);
      getMassRandom(arr);
    }
  }
}

let orderNumber = 1;
let RoundNumber = 1;

function game(event) {
  let sound = event.target.getElementsByTagName("audio")[0];
  let color = event.target.style.background;
  let box = document.getElementsByClassName("gameColor");

  let Round = document.getElementById("Round");

  if (orderNumber === amount) {
    console.log(event.target.number + " - " + orderNumber);

    sound.play();
    event.target.style.background = "green";
    orderNumber = 1;

    RoundNumber++;
    amount++;
    Round.innerHTML = "Round: " + RoundNumber;

    for (var i = 0; i < box.length; i++) {
      box[i].number = null;
    }

    getMassRandom();
  } else if (
    event.target.number &&
    event.target.number.some((item) => item === orderNumber)
  ) {
    console.log(event.target.number + " - " + orderNumber);

    sound.play();
    event.target.style.background = "green";
    orderNumber++;
  } else {
    console.log(event.target.number + " != " + orderNumber + " ERROR");
    document.getElementById(
      "game_result"
    ).innerHTML = `Sorry, you lost on ${RoundNumber} round`;

    sound.play();
    event.target.style.background = "red";
    orderNumber = 1;

    RoundNumber = 1;
    Round.innerHTML = "Round: " + RoundNumber;
    amount = 4;

    for (var i = 0; i < box.length; i++) {
      box[i].number = null;
    }
  }

  setTimeout(() => {
    sound.pause();
    event.target.style.background = color;
  }, 250);
}

///////////////////////////////////////////////////////////////////////////////////////////////
//Отправка формы

const postData = async (url, data) => {
  let res = await fetch(url, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "POST",
    body: JSON.stringify(data), //data (если передаешь в формате FormData)
  });

  return res;
};

let form2 = document.forms[1];

form2.addEventListener("submit", function (event) {
  event.preventDefault();

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
  };

  //let formData = new FormData(form2) - альтернатива варианта сверху

  //Способ проверить все ключи и значения
  /*
	for (var pair of formData.entries()) {
	    console.log(pair[0]+ ': ' + pair[1]); 
	}
	*/

  postData("https://jsonplaceholder.typicode.com/", formData)
    .then((response) => {
      alert("Отправлено");
      console.log(response);
    })
    .catch((response) => {
      alert("ошибка");
      console.log(response);
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////
//Cортировка массивов

//найти задачу посложнее

///////////////////////////////////////////////////////////////////////////////////////////////
/* Анаграмма
let f = prompt("введите слово")
let s = prompt("введите слово")


function finder(word1, word2) {
	let sameSymbolLenght = 0

	for (var i = 0; i < word1.length; i++) {
		for (var j = 0; j < word2.length; j++) {
			if(word1[i] === word2[j]) {
				sameSymbolLenght += 1
			}
		}
	}

	if (sameSymbolLenght === word1.length) {
		console.log(sameSymbolLenght)
		alert(`same, same = ${sameSymbolLenght}`)
	} else {
		console.log(sameSymbolLenght)
		alert(`not same, same = ${sameSymbolLenght}`)
	} 
}

finder(f, s)


//второй способ 

function finder(word1, word2) {

	if(word1.length != word2.length) {
		return false
	}


	if (word1.split('').sort().join('') === word2.split('').sort().join('')) {
		return true
	} 

	return false
}

alert(finder("word1", "rd1wo"))
*/

//Составление слова
/*
let input = {
	" ": [5],
	d: [10],
	e: [1],
	H: [0],
	l: [2, 3, 9],
	o: [4, 7],
	r: [8],
	w: [6]
}


let buildString = (m) => {
	let result = []

	let countSymbols = []

	for(let key in m) {
		for(let value of m[key]) {
			countSymbols.push(value)
		}
	}
	
	countSymbols = Math.max.apply(null, countSymbols)



	for (var i = 0; i <= countSymbols; i++) {
		for(let key in m) {
			for (var j = 0; j < m[key].length; j++) {
				if (m[key][j] == i) {
					result.push(key)
				}
			}
		}
	}


	alert(result.join(""))
}

buildString(input)


второй способ:


let buildString2 = (m) => {
	let result = []


	for(let key in m) {
		for(let j of m[key]) {
			result[j] = key
		}
	}



	alert(result.join(""))
}

buildString2(input)
*/

/* Палиндром
let word = prompt('Введите слово')

function isPalindrom(word) {
	word.toLowerCase()

	for (var i = 0; i < word.length; i++) {
		for (var j = word.length - 1; j <= 0; j--) {
			if (word[i] != word[j]) {
				return alert(false)
			}
		}
	}

	return alert(true)
}

isPalindrom(word)
*/

/* FizzBuzz 
let number = prompt('Введите число')

function FizzBuzz(n) {
	for (var i = 1; i <= n; i++) {
		if (i % 5 === 0 && i % 3 === 0) {
			console.log("FizzBuzz")
		} else if (i % 5 === 0) {
			console.log("buzz")
		} else if (i % 3 === 0) {
			console.log("fizz")
		} else {
			console.log(i)
		}
		
	}
}

FizzBuzz(number)
*/

/* Сколько гласных в слове
let string = prompt('Введите слово')

function findVowels(word) {
	let Vowels = ["e","y","u","i","o","a"]
	let Vowelscount = 0

	word = word.split('')

	for (var i = 0; i < word.length; i++) {
		for (var j = 0; j < Vowels.length; j++) {
			if (Vowels[j] === word[i]) {
				Vowelscount++
			}			
		}
	}

	console.log("Гласных в этом слове - " + Vowelscount)		
}

findVowels(string)


//второй метод 

let string = prompt('Введите слово')

function findVowels(word) {
	let Vowels = ["e","y","u","i","o","a"]
	let Vowelscount = 0

	for(let value of word.toLowerCase()) {
		if (Vowels.includes(value)) {  // выявляет, содержит ли массив определенное значение
			Vowelscount++
		}
	}

	console.log("Гласных в этом слове - " + Vowelscount)		
}

findVowels(string)
*/

//из массива в объект
/*
let aR = [
	{name: "height", value: 10},
	{name: "width", value: 20}
]

function obj() {
	let ob = {}

	aR.forEach( (item) => {
		ob[item.name] = item.value
	})

	console.log(ob)
}

obj() 
*/

/* Каррирование
function add_v1(a, b) {
    let sum = a;

    let makeSum = function (b) {
        if (b) {
            sum += b;
            return makeSum;
        } else {
            return sum;
        }
    }

    return makeSum;
}

console.log(add_v1(2)(5)());
*/

//Уникальные значения в массиве
/*
let massive = [1,1,2,2,3,3,4,4,5,5]

function unique(arr) {
	let res = []

	arr.forEach( (item) => {
		if (res.indexOf(item) === -1) {
			res.push(item)
		}
	})

	return res
}

console.log(unique(massive))
*/

//Расплющивание массива + Рекурсия
/*
let massive = [1,[2,[3,[4]]]]

function flat(arr) {
	let res = []

	arr.forEach( (item) => {
		if (Array.isArray(item)) {
			res = res.concat(flat(item))
		} else {
			res.push(item)
		}
	})

	return res
}

console.log(flat(massive))


// Деструктурирующее присваивание очень полезно знать (особенно для react)
let res = [0]
let res2 = [2,3]
let res3 = [4,5]

console.log([...res, ...res2, ...res3])


//Второй метод через встроенный метод массива Array.prototype.flat()

console.log(massive.flat(Infinity))
*/

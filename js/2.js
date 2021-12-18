const fs = require('fs')

let data = JSON.parse(fs.readFileSync('/Users/niclaskahlmeier/code/advents-of-code-2021/data/2.json'))

const demoData = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']

function getPosition(data) {
	let x = 0
	let y = 0

	for (let i = 0; i < data.length; i++) {
		const direction = data[i].split(' ')[0]
		const distance = parseInt(data[i].split(' ')[1])

		if (direction === 'forward') {
			x += distance
		} else if (direction === 'down') {
			y += distance
		} else if (direction === 'up') {
			y -= distance
		}
	}
	return { x, y }
}

// Part 1 - 2102357
console.log(getPosition(data).x * getPosition(data).y)

function getPositionWithAim(data) {
	let x = 0
	let y = 0
	let aim = 0
	for (let i = 0; i < data.length; i++) {
		const direction = data[i].split(' ')[0]
		const distance = parseInt(data[i].split(' ')[1])

		if (direction === 'forward') {
			x += distance
			y = y + aim * distance
		} else if (direction === 'down') {
			aim += distance
		} else if (direction === 'up') {
			aim -= distance
		}
	}
	return { x, y }
}

// Part 2 - 2101031224
console.log(getPositionWithAim(data).x * getPositionWithAim(data).y)

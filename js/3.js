const fs = require('fs')

let data = JSON.parse(fs.readFileSync('/Users/niclaskahlmeier/code/advents-of-code-2021/data/3.json'))

const demoData = [
	'00100',
	'11110',
	'10110',
	'10111',
	'10101',
	'01111',
	'00111',
	'11100',
	'10000',
	'11001',
	'00010',
	'01010',
]

function retrieveGammaRate(data) {
	let rate = []

	for (let j = 0; j < data[0].length; j++) {
		let oneBits = 0
		let zeroBits = 0
		for (let i = 0; i < data.length; i++) {
			console.log(data[i][j])
			data[i][j] == true ? oneBits++ : zeroBits++
		}
		rate.push(oneBits > zeroBits ? 1 : 0)
	}
	return rate.join('')
}

function binaryToDecimal(binary) {
	return parseInt(binary, 2)
}

function invertBinary(binary) {
	return binary
		.split('')
		.map(bit => 1 - bit)
		.join('')
}

const gammaRate = retrieveGammaRate(data)
const epsilonRate = invertBinary(gammaRate)

// Part 1 - 1131506
console.log(binaryToDecimal(gammaRate) * binaryToDecimal(epsilonRate))

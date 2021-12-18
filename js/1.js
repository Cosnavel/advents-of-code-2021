const fs = require('fs')

let data = JSON.parse(fs.readFileSync('/Users/niclaskahlmeier/code/advents-of-code-2021/data/1.json'))

const demoData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

function retrieveIncreasedMeasurements(measurements) {
	const increasedMeasurements = []
	for (let i = 0; i < measurements.length; i++) {
		const measurement = measurements[i]
		const nextMeasurement = measurements[i + 1]
		if (nextMeasurement && measurement < nextMeasurement) {
			increasedMeasurements.push(nextMeasurement)
		}
	}
	return increasedMeasurements
}

// Part 1 = 1529
console.log(retrieveIncreasedMeasurements(data).length)

function retrieveIncreasedMeasurementWindows(input) {
	const measurementWindows = []

	for (let i = 0; i < input.length - 2; i++) {
		measurementWindows.push(input[i] + input[i + 1] + input[i + 2])
	}

	return retrieveIncreasedMeasurements(measurementWindows)
}

// Part 2 = 1567
console.log(retrieveIncreasedMeasurementWindows(data).length)

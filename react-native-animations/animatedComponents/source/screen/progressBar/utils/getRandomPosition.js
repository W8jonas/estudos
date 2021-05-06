export function getRandomPosition({ x: _maxValueX, y: _maxValueY }) {
	const maxValueX = _maxValueX
	const maxValueY = _maxValueY

	// random positive int
	const valueX = (Math.floor(Math.random() * maxValueX) + 1) * (Math.random() >= 0.5 ? 1 : -1)
	const valueY = (Math.floor(Math.random() * maxValueY) + 1) * (Math.random() >= 0.5 ? 1 : -1)

	return { x: valueX, y: valueY }
}

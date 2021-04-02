import React from 'react'
import { View, StyleSheet } from 'react-native'

// Modules
import PropTypes from 'prop-types'

// Assets
import { colors } from '../../styles'

const styles = StyleSheet.create({
	checkCircle: {
		height: 30,
		width: 30,
		borderRadius: 30,
		borderWidth: 3,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: colors.whiteDefault,
		backgroundColor: colors.whiteDefault,
	},
})

function Circle({ color, size, extraStyle }) {
	return (
		<View style={[styles.checkCircle, {
			borderColor: color, height: size, width: size, ...extraStyle,
		}]}
		/>
	)
}

Circle.defaultProps = {
	extraStyle: {},
}

Circle.propTypes = {
	color: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
	extraStyle: PropTypes.shape({}),
}

export default Circle

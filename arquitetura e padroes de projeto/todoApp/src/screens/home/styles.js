import { StyleSheet } from 'react-native'

import { colors } from '../../styles'

const styles = StyleSheet.create({
	touchContainer: {
		width: '50%',
		height: 54,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.fullWhite,
		borderRadius: 22,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginTop: 10,
		marginBottom: 5,
		elevation: 5,
	},
})

export default styles

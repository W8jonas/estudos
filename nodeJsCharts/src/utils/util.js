

module.exports = function removeReactCompString(reactComponentString) {
    let WithoutReactComponentString = reactComponentString.replace(`export default MyComponent;`, '')

    WithoutReactComponentString = WithoutReactComponentString.replace('{...props}', '')

    WithoutReactComponentString = WithoutReactComponentString.replace(`import Svg, { G, Path, Text, Defs, LinearGradient, Stop, Rect } from "react-native-svg";`, '')

    WithoutReactComponentString = WithoutReactComponentString.replace(`import * as React from "react";`, '')
    WithoutReactComponentString = WithoutReactComponentString.replace(`\n\n\nfunction MyComponent(props) {`, '')
    WithoutReactComponentString = WithoutReactComponentString.replace(`\n  return `, '')
    WithoutReactComponentString = WithoutReactComponentString.replace(`;\n}\n\n`, '')

    return WithoutReactComponentString
}


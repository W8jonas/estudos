
module.exports = function removeReactCompString(reactComponentString) {

    let svgComponent = reactComponentString

    const initTagSvg = svgComponent.indexOf('<Svg')
    const finalTagSvg = svgComponent.indexOf('</Svg>') + 6

    const WithoutReactComponentString = svgComponent.slice(initTagSvg, finalTagSvg)

    const WithoutProps = WithoutReactComponentString.replace('{...props}', '')

    return WithoutProps
}


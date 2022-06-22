import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp, IconDefinition, findIconDefinition, IconLookup, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'
type Props = {
  props : [IconPrefix, IconName]
}

const Icon = (props: Props) => {
  useEffect(() => {
    console.log(props)
  }, [])
  const iconLookup: IconLookup = {prefix: props.props[0], iconName: props.props[1]}
  const iconDefinition: IconDefinition = findIconDefinition(iconLookup)
  return (
    <>
    <FontAwesomeIcon icon={iconDefinition} />
    {/* <i className="fa-solid fa-arrow-right"></i> */}
    {/* <FontAwesomeIcon icon ={"fa-solid fa-arrow-right" as IconProp} /> */}
    </>
    // <h1>yey</h1>
  )
}

export default Icon
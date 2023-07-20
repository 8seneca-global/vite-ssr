import PropTypes from 'prop-types'

import { FaCopy } from 'react-icons/fa'
import { useCopyToClipboard } from 'usehooks-ts'

import useNotification from '#root/hooks/useNotification'
import { DEFAULT_ICON_SIZE, adjustColorBrightness } from './utils'

const Copy = function (props: any) {
  const { showNotification } = useNotification()
  const [_value, copy] = useCopyToClipboard()

  const size = `${props.size || DEFAULT_ICON_SIZE}`

  const baseColor = props.color || '#3B5998',
    hoverColor = adjustColorBrightness(baseColor, -0.1),
    activeColor = adjustColorBrightness(baseColor, -0.2)

  return (
    <button
      title="Click here to copy"
      style={{ fontSize: size, color: baseColor }}
      onMouseOver={e => (e.currentTarget.style.color = hoverColor)}
      onMouseOut={e => (e.currentTarget.style.color = baseColor)}
      onMouseUp={e => (e.currentTarget.style.color = baseColor)}
      onMouseDown={e => (e.currentTarget.style.color = activeColor)}
      onFocus={e => (e.currentTarget.style.color = hoverColor)}
      onClick={function () {
        copy(window.location.href)
        showNotification({ msg: 'Copied!', variant: 'success' })
      }}>
      <FaCopy />
    </button>
  )
}

Copy.propTypes = {
  url: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
}

export default Copy

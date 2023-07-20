import { motion } from 'framer-motion'
import { FC } from 'react'
import styled from 'styled-components'

const CustomHR = styled('hr')({
  border: 'solid #EB1933',
  borderRadius: '20px',
  width: '31px',
  height: '4px',
})
const CustomDot = styled('hr')({
  border: 'solid #EB1933',
  borderRadius: '20px',
  width: '5px',
  height: '4px',
  marginLeft: '3px',
})
const Wrapper = styled('div')({
  display: 'flex',
  alignContent: 'center',
  padding: '50px',
  position: 'absolute',
})

export const UnderLine: FC = props => {
  return (
    <motion.div
      className="underline"
      animate={{
        x: 130,
      }}
      style={{
        display: 'flex',
        alignContent: 'center',
        padding: '50pxs',
        position: 'absolute',
        marginLeft: '-145px',
      }}
      transition={{
        type: 'spring',
        stiffness: 230,
      }}>
      <CustomHR></CustomHR>
      <CustomDot></CustomDot>
    </motion.div>
  )
}

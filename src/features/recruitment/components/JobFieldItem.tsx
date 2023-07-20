import { linearGradientColor, theme } from '#root/themes/theme'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: '300px',
  maxWidth: '400px',
  height: '100%',
  background: `${linearGradientColor}`,
  boxShadow: '1px 15px 23px rgba(229, 229, 229, 0.25)',
  borderRadius: '40px',
  justifyContent: 'center',
})

type Props = {
  data: any
  selectedItem: any
  onClick: any
}

export type FieldItemType = {
  name: string
  slug: string
  inactiveIcon: string
  activeIcon: string
}

export const JobFieldItem: FC<Props> = ({ data, onClick, selectedItem }) => {
  const isSelected = data.slug === selectedItem

  return (
    <Box component="div" display="flex" width="100%" justifyContent="center">
      <Wrapper
        to="#"
        onClick={() => onClick(data.slug)}
        style={isSelected ? {} : { background: 'rgba(245, 245, 245, 1)' }}>
        <Box marginY="14%" display="flex" flexDirection="column" alignItems="center">
          <Box
            component="img"
            src={isSelected ? data.activeIcon : data.inactiveIcon}
            sx={{ width: 72, height: 72 }}></Box>
          <Typography
            fontSize="24px"
            fontWeight={500}
            color={isSelected ? theme.palette.info.main : theme.palette.primary.main}
            marginTop={4}>
            {data.name}
          </Typography>
        </Box>
      </Wrapper>
    </Box>
  )
}

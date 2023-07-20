import { ContentItem } from '#root/features/home/components/about-us/AboutUsSection'
import {
  CollaborativeItemDetail,
  CollaborativeItemDetailType,
} from '#root/features/home/components/collaborative/CollaborativeItemDetail'
import { Box, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { FC } from 'react'
import styled from 'styled-components'

const ItemContainerWrapper = styled('div')({
  backgroundColor: 'transparent',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  borderRadius: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  width: '100%',
})

export type CollaborativeItemType = {
  icon: string
  label: string
  desc: string
  items: CollaborativeItemDetailType[]
}

type Props = {
  data: CollaborativeItemType
  index: number
  activeIndex?: number
}

export const CollaborativeItem: FC<Props> = ({ data, index, activeIndex }) => {
  return (
    <Grid item xs={12} sm={4}>
      <motion.button
        className="gradient-background"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2, loop: Infinity, ease: 'easeInOut' },
        }}>
        <ItemContainerWrapper>
          <ContentItem>
            <Box component="img" src={data.icon} className="w-11 h-11 my-auto"></Box>
          </ContentItem>
          <Typography fontWeight={700} fontSize="18px" color="#181E54" className="mt-2">
            {data.label}
          </Typography>
          <Typography fontWeight={700} fontSize="12px" color="rgba(0, 0, 0, 0.50)" className="mt-2 pl-1 pr-1">
            {data.desc}
          </Typography>
          <Box component="div" className="px-6 pt-2 text-left pb-8 w-full">
            {data.items.map(item => (
              <CollaborativeItemDetail data={item} key={item.name} />
            ))}
          </Box>
        </ItemContainerWrapper>
      </motion.button>
    </Grid>
  )
}

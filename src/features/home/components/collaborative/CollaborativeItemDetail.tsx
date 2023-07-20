import { useIsMobile } from '#root/hooks/useIsMobile'
import { theme } from '#root/themes/theme'
import { Accordion, AccordionDetails, AccordionSummary, IconButton, Tooltip, Typography, styled } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

const ItemWrapper = styled('div')({
  borderBottom: 1,
  borderStyle: 'dashed',
  borderColor: theme.palette.info.light,
  padding: 5,
  fontWeight: 500,
  fontSize: 15,
  cursor: 'pointer',
})

type Props = {
  data: CollaborativeItemDetailType
}

export type CollaborativeItemDetailType = { name: string; summary: string }

export const CollaborativeItemDetail: FC<Props> = ({ data }) => {
  const isMobile = useIsMobile()

  return (
    <AnimatePresence key={data.name}>
      <motion.div
        initial={{ opacity: 0, height: 'auto' }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ type: 'spring', duration: 0.3 }}>
        {isMobile ? (
          <Accordion style={{ boxShadow: 'none' }}>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
              <Typography>{data.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data.summary}</Typography>
            </AccordionDetails>
          </Accordion>
        ) : (
          <ItemWrapper key={data.name}>
            <Tooltip title={data.summary} followCursor={true} sx={{ borderRadius: 0, fontSize: 20 }}>
              <IconButton sx={{ width: '100%', borderRadius: 0, fontSize: 15 }}>
                <p key={data.name} className="list-item list-inside list-none pl-4 w-full text-left font-semibold">
                  {data.name}
                </p>
              </IconButton>
            </Tooltip>
          </ItemWrapper>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

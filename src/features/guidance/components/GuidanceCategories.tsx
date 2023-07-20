import GuidanceItem1Img from '#root/assets/images/GuidanceItem.png'
import { GuidanceCategoriesText } from '#root/features/guidance/components/GuidanceCategoriesText'
import { useIsMobile } from '#root/hooks/useIsMobile'
import { Box, Grid } from '@mui/material'

export const GuidanceCategories = () => {
  const isMobile = useIsMobile()
  return (
    <>
      <Grid container marginTop="10%" spacing="34px">
        {!isMobile && (
          <Grid item xs={12} sm={7.5} md={7}>
            <Box component="img" src={GuidanceItem1Img} />
          </Grid>
        )}
        <Grid item xs={12} sm={4.5} md={5} marginX="auto">
          <GuidanceCategoriesText />
        </Grid>
      </Grid>
    </>
  )
}

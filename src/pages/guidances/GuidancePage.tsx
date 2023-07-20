import { GuidanceSteps } from '#root/features/guidance/components/GuidanceSteps'
import { GuidanceVideo } from '#root/features/guidance/components/GuidanceVideo'
import { Heading } from '#root/features/guidance/components/Heading'
import { Box } from '@mui/material'

export const GuidancePage = () => {
  return (
    <Box component="div" paddingTop="140px" paddingX="10%" width="100%">
      <Heading />
      <GuidanceVideo />
      {/* <GuidanceCategories /> */}
      <GuidanceSteps />
    </Box>
  )
}

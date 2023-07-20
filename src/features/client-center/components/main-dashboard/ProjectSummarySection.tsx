import { ProjectTable } from '#root/features/client-center/components/main-dashboard/ProjectTable'
import { Box, Typography, styled } from '@mui/material'
import { FC } from 'react'

const Wrapper = styled(Box)({
  borderRadius: '20px',
  border: '1px solid #F6F6F6',
  boxShadow: '1px 5px 23px 0px rgba(229, 229, 229, 0.50)',
  marginTop: '10%',
  marginBottom: '2%',
})

type Props = {}

export const ProjectSummarySection: FC<Props> = () => {
  return (
    <Wrapper>
      <Box paddingX="2%" paddingY="4%">
        <Typography variant="h1" fontSize="24px" marginBottom="4%">
          Project Summary
        </Typography>
        <ProjectTable />
      </Box>
    </Wrapper>
  )
}

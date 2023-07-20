import { RecruitmentItemLoading } from '#root/components/Loading/RecruitmentItemLoading'
import { IRecruitmentItemType } from '#root/features/recruitment/api/useJobList'
import JobDetail from '#root/features/recruitment/components/JobDetail'
import { JobItem } from '#root/features/recruitment/components/JobItem'
import { Box, Grid, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

type Props = {
  data?: IRecruitmentItemType[]
  selectedField?: string
  isLoading?: boolean
}

export const JobList: FC<Props> = ({ data, selectedField, isLoading }) => {
  const urlParams = useParams()
  const navigate = useNavigate()

  const [pageId, setPageId] = useState<string | undefined>(urlParams?.id)

  const isOpeningDetail = !!pageId

  const noOpenPositions = data?.length === 0

  const handleCloseModal = () => {
    navigate('/recruitment')
    setPageId(undefined)
  }

  const handleOpenDetail = (jobId: string) => {
    navigate(`/recruitment/${jobId}`)
    setPageId(jobId)
  }

  if (isLoading) {
    return <RecruitmentItemLoading />
  }

  if (noOpenPositions) {
    return (
      <Typography className="bounce-in" variant="h3" marginTop={12}>
        No open positions!
      </Typography>
    )
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" paddingTop="80px">
      <Typography variant="h1" fontSize="36px">
        {selectedField} open positions
      </Typography>
      <Grid container spacing="24px" paddingY="64px">
        {data?.map(item => (
          <JobItem key={item.id} data={item} onClick={handleOpenDetail} />
        ))}
      </Grid>
      {isOpeningDetail && <JobDetail pageId={pageId} onCloseModal={handleCloseModal} />}
    </Box>
  )
}

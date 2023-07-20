import { RecruitmentDetailLoading } from '#root/components/Loading/RecruitmentDetailLoading'
import { DropZone } from '#root/components/elements/DropZone'
import { useRecruitmentDetail } from '#root/features/recruitment/api/useJobDetail'
import { JobSharingSocialDialog } from '#root/features/recruitment/components/JobSharingSocialDialog'
import { linearGradientColor, theme } from '#root/themes/theme'
import { Render } from '@9gustin/react-notion-render'
import { Box, Button, Dialog, DialogActions, DialogContent, Grid, Typography, styled } from '@mui/material'
import { FC, useState } from 'react'

const Wrapper = styled('div')({
  paddingInline: 50,
})

const ApplyWrapper = styled('div')({
  background: linearGradientColor,
  paddingInline: 50,
  paddingBlock: 40,
  borderRadius: 40,
  color: '#fff',
})

const HeadingWrapper = styled('div')({
  marginTop: 30,
  marginBottom: 40,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const StyledButton = styled(Button)<StyledButtonType>(({ backgroundColor }) => ({
  borderRadius: '70px',
  minWidth: '100px',
  minHeight: '40px',
  background: backgroundColor,
}))

type StyledButtonType = {
  backgroundColor?: string
}

type Props = {
  pageId?: string
  onCloseModal: () => void
}

const JobDetail: FC<Props> = ({ pageId, onCloseModal }) => {
  const { data, isLoading } = useRecruitmentDetail(pageId as string)
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)

  const handleShare = () => {
    setIsConfirmDialogOpen(true)
  }
  console.log(isConfirmDialogOpen)
  return (
    <Dialog
      open={!!pageId}
      fullWidth
      onClose={onCloseModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      {!data || !data.metadata || isLoading ? (
        <RecruitmentDetailLoading />
      ) : (
        <>
          <DialogContent>
            <Wrapper>
              <HeadingWrapper>
                <Typography variant="h1">{data.metadata.properties['Name'].title[0].plain_text}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                  <Typography variant="subtitle1">
                    {data.metadata.properties['Location'].rich_text[0].plain_text}
                  </Typography>
                  <span style={{ marginInline: 10 }}>|</span>
                  <Typography variant="subtitle1" style={{ color: theme.palette.error.light }}>
                    {data.metadata.properties['WorkType'].select?.name}
                  </Typography>
                </Box>
              </HeadingWrapper>

              <Grid container spacing={15}>
                <Grid item xs={12} sm={7}>
                  <Box component="div">{data?.results && <Render blocks={data?.results} classNames />}</Box>
                </Grid>
                <Grid item xs={0} sm={5}>
                  <ApplyWrapper>
                    <Typography variant="h2" style={{ fontWeight: 500 }}>
                      Easy Apply
                    </Typography>
                    <Typography variant="body1" style={{ marginTop: 5 }}>
                      Drop in your CV and our team will get back before you know it.
                    </Typography>
                    <DropZone
                      folder={data.metadata.properties['Category'].select?.name}
                      subfolder={data.metadata.properties['Subcategory'].select?.name}
                    />
                  </ApplyWrapper>
                </Grid>
              </Grid>
            </Wrapper>
          </DialogContent>
          <DialogActions>
            <StyledButton onClick={onCloseModal} autoFocus>
              Close
            </StyledButton>
            <StyledButton variant="contained" backgroundColor={linearGradientColor} onClick={handleShare} autoFocus>
              Share
            </StyledButton>
          </DialogActions>
          {isConfirmDialogOpen && (
            <JobSharingSocialDialog open={isConfirmDialogOpen} setIsConfirmDialogOpen={setIsConfirmDialogOpen} />
          )}
        </>
      )}
    </Dialog>
  )
}

export default JobDetail

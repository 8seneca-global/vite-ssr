import AprroveTeamIcon from '#root/assets/images/ApproveIcon.png'
import DecribeNeedsIcon from '#root/assets/images/DescribeNeedsIcon.png'
import ScheduleMeetingIcon from '#root/assets/images/ScheduleMeetingIcon.png'
import StartProjectIcon from '#root/assets/images/StartProjectIcon.png'
import { GuidanceStepsItem } from '#root/features/guidance/components/GuidanceStepsItem'
import { Grid, Typography } from '@mui/material'

export const GuidanceSteps = () => {
  const steps = [
    {
      title: 'Describe your needs',
      content: 'Tell us your technology requirements and describe your project using our contact form.',
      icon: DecribeNeedsIcon,
    },
    {
      title: 'Schedule meeting',
      content: 'No one-size-fits-all. We align on goals and always create a unique team augmentation strategy.',
      icon: ScheduleMeetingIcon,
    },
    {
      title: 'Approve your team',
      content: 'We provide you CVs. You approve each candidate who will join your team.',
      icon: AprroveTeamIcon,
    },
    {
      title: 'Start your project',
      content: 'We seal the deal with a contract and launch your remote team',
      icon: StartProjectIcon,
    },
  ]
  return (
    <>
      <Typography variant="h1" marginTop="120px" fontSize="32px">
        Easy steps to get big, and more great hires
      </Typography>
      <Typography variant="body2" marginTop="16px" fontSize="16px">
        An easy recruiment process can help your team in getting talent candidates quickly too.
      </Typography>
      <Grid container marginTop="100px" spacing="48px" justifyContent="center">
        {steps.map(step => (
          <Grid item xs={12} sm={3} key={step.title} justifyContent="center">
            <GuidanceStepsItem stepItem={step} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

import { PageWrapper } from '#root/components/PageWrapper'
import { useJobList } from '#root/features/recruitment/api/useJobList'
import { JobFields, jobFields } from '#root/features/recruitment/components/JobFields'
import { JobList } from '#root/features/recruitment/components/JobList'
import { RecruitmentPageHeading } from '#root/features/recruitment/components/RecruitmentPageHeading'
import { useMemo, useState } from 'react'

export const RecruitmentPage = () => {
  const [selectedItem, setSelectedItem] = useState(jobFields[0].slug)
  const { data: jobList, isLoading } = useJobList(selectedItem)

  const selectedField = useMemo(() => {
    return jobFields.find(item => item.slug === selectedItem)?.name
  }, [selectedItem])

  return (
    <PageWrapper customStyle={{ paddingLeft: '10%', paddingRight: '10%' }}>
      <RecruitmentPageHeading />
      <JobFields onClick={setSelectedItem} selectedItem={selectedItem} />
      <JobList data={jobList} selectedField={selectedField} isLoading={isLoading} />
    </PageWrapper>
  )
}

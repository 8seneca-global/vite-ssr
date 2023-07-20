import { PageWrapper } from '#root/components/PageWrapper'
import { CalculatorSection } from '#root/features/tools/calculator/components/CalculatorSection'
import { CalculatorPageFAQ } from '#root/features/tools/calculator/components/FAQ/FAQSection'
import { FC } from 'react'

type Props = {}

const Page: FC<Props> = () => {
  return (
    <PageWrapper customStyle={{ paddingLeft: '10%', paddingRight: '10%' }}>
      <CalculatorSection />
      <CalculatorPageFAQ />
    </PageWrapper>
  )
}

const documentProps = {
  title: 'ahahah',
}

export { Page, documentProps }

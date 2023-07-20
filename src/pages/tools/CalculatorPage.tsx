import { PageWrapper } from '#root/components/PageWrapper'
import { CalculatorSection } from '#root/features/tools/calculator/components/CalculatorSection'
import { CalculatorPageFAQ } from '#root/features/tools/calculator/components/FAQ/FAQSection'
import { FC } from 'react'
import styled from 'styled-components'

type Props = {}

const Wrapper = styled('div')({
  paddingTop: '140px',
  width: '100%',
  paddingLeft: '10%',
  paddingRight: '10%',
})

const Page: FC<Props> = () => {
  return (
    <PageWrapper customStyle={{ paddingLeft: '10%', paddingRight: '10%' }}>
      <CalculatorSection />
      <CalculatorPageFAQ />
    </PageWrapper>
  )
}

const documentProps = {
  title: 'xxxx',
  description: 'https://8seneca.com/Leveraging-Outsourced-IT-Teams-to-Fast-Track-Your-MVP-Development.png',
}

export { Page, documentProps }

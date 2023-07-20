import { PageWrapper } from '#root/components/PageWrapper'
import { FeaturedInSection } from '#root/features/home/FeaturedInSection'
import { ContactUsSection } from '#root/features/home/components/ContactUsSection'
import { DescribeSection } from '#root/features/home/components/DescribeSection'
import { AboutUsSection } from '#root/features/home/components/about-us/AboutUsSection'
import { CollaborativeSection } from '#root/features/home/components/collaborative/CollaborativeSection'
import { CommentSection } from '#root/features/home/components/comment/CommentSection'
import { ProgressSection } from '#root/features/home/components/process/ProgressSection'
import { ScrollContainer, ScrollPage } from 'react-scroll-motion'

const Page = () => {
  return (
    <PageWrapper>
      <ScrollContainer>
        <DescribeSection />
        <ScrollPage style={{ height: 'fit-content' }}>
          <AboutUsSection />
        </ScrollPage>
        <ProgressSection />
        <CollaborativeSection />
        <CommentSection />
        <FeaturedInSection />
        <ContactUsSection />
      </ScrollContainer>
    </PageWrapper>
  )
}

const documentProps = {
  title: '123',
  description: 'https://8seneca.com/Leveraging-Outsourced-IT-Teams-to-Fast-Track-Your-MVP-Development.png',
}

export { Page, documentProps }

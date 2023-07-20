import ClientLogo from '#root/assets/images/8senecaClientLogo.svg'
import ActiveBillingIcon from '#root/assets/images/ActiveBillingIcon.svg'
import ActiveContractIcon from '#root/assets/images/ActiveContractIcon.svg'
import ActiveOverviewIcon from '#root/assets/images/ActiveOverviewIcon.svg'
import ActiveProjectIcon from '#root/assets/images/ActiveProjectIcon.svg'
import ActiveSettingsIcon from '#root/assets/images/ActiveSettingsIcon.svg'
import ActiveTalentIcon from '#root/assets/images/ActiveTalent.svg'
import InActiveBillingIcon from '#root/assets/images/InActiveBillingIcon.svg'
import InActiveContractIcon from '#root/assets/images/InActiveContractIcon.svg'
import InActiveOverviewIcon from '#root/assets/images/InActiveOverviewIcon.svg'
import InActiveProjectIcon from '#root/assets/images/InActiveProjectIcon.svg'
import InActiveSettingsIcon from '#root/assets/images/InActiveSettingsIcon.svg'
import InActiveTalentIcon from '#root/assets/images/InactiveTalentIcon.svg'
import { HelpCenterSection } from '#root/features/client-center/components/HelpCenterSection'
import { MenuItem } from '#root/features/client-center/components/MenuItem'
import { linearGradientColor } from '#root/themes/theme'
import { Box, styled } from '@mui/material'
import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Wrapper = styled(Box)({
  background: linearGradientColor,
  width: '100%',
  height: '100vh',
})

const MenuWrapper = styled(Box)({
  paddingTop: '24%',
  paddingInline: '12%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '10%',
})

const MenuListWrapper = styled(Box)({
  marginTop: '20%',
})

const MenuList = [
  {
    label: 'Overview',
    activeIcon: ActiveOverviewIcon,
    inActiveIcon: InActiveOverviewIcon,
    slug: 'main-dashboard',
  },
  {
    label: 'Talent',
    activeIcon: ActiveTalentIcon,
    inActiveIcon: InActiveTalentIcon,
    slug: 'talent',
  },
  {
    label: 'Project',
    activeIcon: ActiveProjectIcon,
    inActiveIcon: InActiveProjectIcon,
    slug: 'project',
  },
  {
    label: 'Contract',
    activeIcon: ActiveContractIcon,
    inActiveIcon: InActiveContractIcon,
    slug: 'contract',
  },
  {
    label: 'Billing & Invoice',
    activeIcon: ActiveBillingIcon,
    inActiveIcon: InActiveBillingIcon,
    slug: 'billing-invoice',
  },
  {
    label: 'Settings',
    activeIcon: ActiveSettingsIcon,
    inActiveIcon: InActiveSettingsIcon,
    slug: 'settings',
  },
]
type Props = {}

export const MenuNavBar: FC<Props> = () => {
  const location = useLocation()
  const url = location.pathname
  const path = url.split('/').pop()
  const [activeButtonIndex, setActiveButtonIndex] = useState(path ? path : 'main-dashboard')

  return (
    <Wrapper>
      <MenuWrapper>
        <img src={ClientLogo} width="75%" />
        <MenuListWrapper>
          {MenuList.map((item, index) => (
            <MenuItem
              index={index}
              item={item}
              key={item.label}
              isActive={item.slug === activeButtonIndex}
              setActiveButtonIndex={setActiveButtonIndex}
            />
          ))}
        </MenuListWrapper>
        <Box justifyContent="flex-end" display="flex" flexDirection="column" height="100%">
          <HelpCenterSection />
        </Box>
      </MenuWrapper>
    </Wrapper>
  )
}

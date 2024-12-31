import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons"

type Props = {
  title: string
  icon: React.ReactNode
  description: string
  strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] = [
  {
    title: 'Connect Instagram',
    description:
      'Seamlessly integrate Instagram with your automation system to engage users and capture leads effectively.',
    icon: <InstagramDuoToneBlue />,
    strategy: 'INSTAGRAM',
    
  },
  {
    title: 'Connect Salesforce',
    description:
      'Integrate Salesforce with your automation tool to manage leads, track customer interactions, and streamline CRM processes.',
    icon: <SalesForceDuoToneBlue />,
    strategy: 'CRM',
  },
]

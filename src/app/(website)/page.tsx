import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CheckCircle, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const plans = [
    {
      name: 'Free Plan',
      description: 'Perfect for getting started',
      price: '$0',
      features: [
        'Boost engagement with target responses',
        'Automate comment replies to enhance audience interaction',
        'Turn followers into customers with targeted messaging',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Smart AI Plan',
      description: 'Advanced features for power users',
      price: '$99',
      features: [
        'All features from Free Plan',
        'AI-powered response generation',
        'Advanced analytics and insights',
        'Priority customer support',
        'Custom branding options',
      ],
      cta: 'Upgrade Now',
    },
  ]
  return (
    <main>
      <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative">
          <div className="container px-4 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold text-primary-foreground">
                  <svg
                    width="116"
                    height="61"
                    viewBox="0 0 116 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.542 48H84.9589L82.4164 44.4741C81.7928 45.0338 81.1292 45.5615 80.4256 46.0572C79.7381 46.5369 79.0105 46.9606 78.243 47.3284C77.4754 47.6802 76.6839 47.96 75.8684 48.1679C75.0689 48.3758 74.2534 48.4797 73.4219 48.4797C71.6149 48.4797 69.912 48.1439 68.3129 47.4723C66.7299 46.7847 65.3387 45.8413 64.1395 44.642C62.9562 43.4268 62.0207 41.9956 61.3331 40.3486C60.6456 38.6856 60.3018 36.8787 60.3018 34.9279C60.3018 32.993 60.6456 31.1941 61.3331 29.5311C62.0207 27.8681 62.9562 26.429 64.1395 25.2137C65.3387 23.9985 66.7299 23.047 68.3129 22.3594C69.912 21.6719 71.6149 21.3281 73.4219 21.3281C73.9975 21.3281 74.5892 21.376 75.1968 21.472C75.8204 21.5679 76.4201 21.7278 76.9957 21.9517C77.5873 22.1596 78.139 22.4394 78.6507 22.7912C79.1624 23.143 79.5941 23.5747 79.9459 24.0864V12.0936H86.542V48ZM79.9459 34.9279C79.9459 34.0324 79.77 33.1689 79.4182 32.3374C79.0824 31.4899 78.6187 30.7464 78.0271 30.1068C77.4354 29.4512 76.7399 28.9315 75.9403 28.5477C75.1568 28.148 74.3173 27.9481 73.4219 27.9481C72.5264 27.9481 71.6789 28.108 70.8794 28.4278C70.0959 28.7476 69.4083 29.2113 68.8166 29.819C68.241 30.4106 67.7853 31.1382 67.4495 32.0016C67.1137 32.8651 66.9458 33.8405 66.9458 34.9279C66.9458 35.8713 67.1137 36.7668 67.4495 37.6143C67.7853 38.4617 68.241 39.2053 68.8166 39.8449C69.4083 40.4845 70.0959 40.9882 70.8794 41.356C71.6789 41.7238 72.5264 41.9077 73.4219 41.9077C74.3173 41.9077 75.1568 41.7158 75.9403 41.332C76.7399 40.9323 77.4354 40.4126 78.0271 39.773C78.6187 39.1174 79.0824 38.3738 79.4182 37.5423C79.77 36.6948 79.9459 35.8233 79.9459 34.9279ZM101.773 41.7158C102.029 41.7957 102.284 41.8517 102.54 41.8837C102.796 41.8997 103.052 41.9077 103.308 41.9077C103.947 41.9077 104.563 41.8197 105.155 41.6438C105.746 41.4679 106.298 41.2201 106.81 40.9003C107.337 40.5645 107.801 40.1647 108.201 39.701C108.617 39.2213 108.952 38.6936 109.208 38.118L114.005 42.939C113.398 43.8025 112.694 44.5781 111.895 45.2656C111.111 45.9532 110.256 46.5369 109.328 47.0166C108.417 47.4963 107.449 47.8561 106.426 48.0959C105.419 48.3518 104.379 48.4797 103.308 48.4797C101.501 48.4797 99.798 48.1439 98.1989 47.4723C96.6159 46.8007 95.2247 45.8653 94.0254 44.666C92.8422 43.4667 91.9067 42.0436 91.2191 40.3966C90.5316 38.7336 90.1878 36.9107 90.1878 34.9279C90.1878 32.8971 90.5316 31.0422 91.2191 29.3632C91.9067 27.6842 92.8422 26.2531 94.0254 25.0698C95.2247 23.8865 96.6159 22.9671 98.1989 22.3115C99.798 21.6559 101.501 21.3281 103.308 21.3281C104.379 21.3281 105.427 21.456 106.45 21.7118C107.473 21.9677 108.441 22.3355 109.352 22.8152C110.28 23.2949 111.143 23.8865 111.943 24.5901C112.742 25.2777 113.446 26.0532 114.053 26.9167L101.773 41.7158ZM105.131 28.2119C104.827 28.1 104.523 28.028 104.219 27.996C103.931 27.9641 103.628 27.9481 103.308 27.9481C102.412 27.9481 101.565 28.116 100.765 28.4518C99.9819 28.7716 99.2943 29.2353 98.7026 29.8429C98.127 30.4506 97.6713 31.1861 97.3355 32.0496C96.9997 32.8971 96.8318 33.8565 96.8318 34.9279C96.8318 35.1677 96.8398 35.4396 96.8557 35.7434C96.8877 36.0472 96.9277 36.359 96.9757 36.6788C97.0396 36.9826 97.1116 37.2785 97.1915 37.5663C97.2715 37.8541 97.3754 38.11 97.5034 38.3338L105.131 28.2119Z"
                      fill="#AABBFF"
                    />
                    <path
                      d="M1.95264 23.9185C1.95264 22.4954 2.22447 21.1602 2.76814 19.9129C3.31182 18.6657 4.04737 17.5783 4.97482 16.6509C5.91825 15.7075 7.01359 14.9639 8.26084 14.4202C9.50808 13.8766 10.8433 13.6047 12.2664 13.6047L28.0489 13.6047V20.4886H12.2664C11.7867 20.4886 11.339 20.5765 10.9232 20.7524C10.5075 20.9283 10.1397 21.1762 9.8199 21.496C9.51608 21.7998 9.27622 22.1596 9.10033 22.5753C8.92444 22.9911 8.83649 23.4388 8.83649 23.9185C8.83649 24.3982 8.92444 24.8539 9.10033 25.2857C9.27622 25.7014 9.51608 26.0692 9.8199 26.389C10.1397 26.6928 10.5075 26.9327 10.9232 27.1086C11.339 27.2845 11.7867 27.3724 12.2664 27.3724H19.1503C20.5734 27.3724 21.9086 27.6443 23.1559 28.1879C24.4191 28.7156 25.5144 29.4512 26.4419 30.3946C27.3853 31.322 28.1209 32.4174 28.6486 33.6806C29.1922 34.9279 29.4641 36.2631 29.4641 37.6862C29.4641 39.1094 29.1922 40.4446 28.6486 41.6918C28.1209 42.939 27.3853 44.0344 26.4419 44.9778C25.5144 45.9053 24.4191 46.6408 23.1559 47.1845C21.9086 47.7282 20.5734 48 19.1503 48H3.87148L3.87148 41.1161H19.1503C19.63 41.1161 20.0777 41.0282 20.4935 40.8523C20.9092 40.6764 21.269 40.4366 21.5728 40.1327C21.8926 39.8129 22.1405 39.4452 22.3164 39.0294C22.4923 38.6137 22.5802 38.1659 22.5802 37.6862C22.5802 37.2065 22.4923 36.7588 22.3164 36.343C22.1405 35.9273 21.8926 35.5675 21.5728 35.2637C21.269 34.9439 20.9092 34.696 20.4935 34.5201C20.0777 34.3442 19.63 34.2563 19.1503 34.2563H12.2664C10.8433 34.2563 9.50808 33.9844 8.26084 33.4408C7.01359 32.8971 5.91825 32.1615 4.97482 31.2341C4.04737 30.2907 3.31182 29.1953 2.76814 27.9481C2.22447 26.6848 1.95264 25.3416 1.95264 23.9185Z"
                      fill="#AABBFF"
                    />
                    <path
                      d="M29.98 22.9948C33.7041 41.0907 45.869 46.2111 61.1018 43.7636"
                      stroke="#AABBFF"
                      stroke-width="6.38743"
                    />
                    <path
                      d="M41.2124 25.9109C41.7282 28.558 44.102 34.4987 49.4707 37.0849"
                      stroke="#AABBFF"
                      stroke-width="5.10995"
                    />
                    <circle
                      cx="41.0184"
                      cy="20.1204"
                      r="2.87435"
                      fill="#AABBFF"
                    />
                  </svg>
                </span>
              </div>
              <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
                <Link href="#features">Features</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#about">About</Link>
              </nav>
              <Button className="bg-blue-600 text-white hover:bg-white hover:text-black">
                <Link href="/dashboard">Login</Link>
              </Button>
            </div>

            <div className="mx-auto mt-16 max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Instagram Engagement with Slide
              </h1>

              <p className="mt-6 text-lg text-blue-200">
                Slide revolutionizes how you connect with your audience on
                Instagram. Automate responses and boost engagement effortlessly,
                turning interactions into valuable business opportunities.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400  hover:bg-blue-900/50"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-40 md:h-80 w-full  mt-10">
              <Image
                src="/Ig-creators.png"
                alt="Community member"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Choose Your Plan
            </h2>
            <p className="max-w-[900px] text-muted-foreground">
              Select the perfect plan to boost your Instagram engagement
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between"
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center"
                      >
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

import { Page } from 'payload-types'

export const homePageData: Omit<Page, 'id' | 'createdAt' | 'updatedAt'> = {
  title: 'Home Page',
  isHome: true,
  _status: 'published',
  blocks: [
    {
      caption: 'Beta Now Live!',
      title: 'Decrease your SaaS churn by over 90%',
      sub_title:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et, distinctio eum impedit nihil ipsum modi.',
      button_text: 'Start free trail',
      blockType: 'Hero2',
    },
    {
      cards: [
        {
          title: 'ReactJs',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices',
          link: '#',
        },
        {
          title: 'NextJs',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices',
          link: '#',
        },
        {
          title: 'Payload',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices',
          link: '#',
        },
        {
          title: 'TailwindCss',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices',
          link: '#',
        },
        {
          title: 'Shadcn',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices',
          link: '#',
        },
        {
          title: 'Css',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices',
          link: '#',
        },
      ],
      blockType: 'Cards',
    },
    {
      features: [
        {
          title: 'Team',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.',
          image: '',
        },
        {
          title: 'Products',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.',
          image: '',
        },
        {
          title: 'Reduce',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.',
          image: '',
        },
        {
          title: 'Organic',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.',
          image: '',
        },
      ],
      blockType: 'StickyScrollReveal',
    },
    {
      title: 'CTA',
      description:
        'Addicting, interactive, animated UI components and templates for  React,  Tailwind CSS, Framer motion logo Framer Motion & more. Copy & paste them into your code with 2 clicks.',
      button: 'Click me',
      buttonTwo: 'Learn more',
      blockType: 'Cta',
    },
    {
      title: 'Faq',
      sub_title: 'Frequenty asked questions',
      questions: [
        {
          question: 'What is a SAAS platform?',
          answer:
            'SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.',
        },
        {
          question: 'How does billing work?',
          answer:
            'We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.',
        },
        {
          question: 'Can I get a refund for my subscription?',
          answer:
            'We offers a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.',
        },
        {
          question: 'How does billing work?',
          answer:
            'We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.',
        },
        {
          question: 'Can I get a refund for my subscription?',
          answer:
            'We offers a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.',
        },
      ],
      blockType: 'Faqs',
    },
  ],
}

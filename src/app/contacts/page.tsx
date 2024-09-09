import ContactSection from '@/components/contact_section/Contact_section'
import React from 'react'
import {Metadata} from "next";

export const metadata: Metadata = {
  alternates:{
    canonical:`${process.env.SITE_URL}/contacts`,
  },
  title: 'Контакти',
  description: 'Напишіть нам, замовте зворотній звязок, комплексний юридичний супровід бізнесу',
}
function page() {
  return (
    <>
    <ContactSection className='py-32 md:py-40'/>
    </>
  )
}

export default page
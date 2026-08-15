import React from 'react'
import { Skills } from '../components/Skills/Skills'
import { Faq } from '../components/Faq/Faq'
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb'

export default function SkillsPage() {
  return (
    <>
        <Breadcrumb pageName="Skills" />
        <Skills/>
        <Faq />
    </>
  )
}

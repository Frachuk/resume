import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Hero } from '@/features/hero/Hero';
import { MetricsStrip } from '@/features/metrics/MetricsStrip';
import { About } from '@/features/about/About';
import { Skills } from '@/features/skills/Skills';
import { WorkTimeline } from '@/features/experience/WorkTimeline';
import { Education } from '@/features/education/Education';
import { Section } from '@/components/Section';
import { FeaturedProjects } from '@/features/projects/FeaturedProjects';
import { ProjectGrid } from '@/features/projects/ProjectGrid';
import { Footer } from '@/features/footer/Footer';
import { ResumeDocument } from '@/features/resume-pdf/ResumeDocument';

export function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="print:hidden">
        <Header />
        <main>
          <Hero />
          <MetricsStrip />
          <About />
          <Skills />
          <WorkTimeline />
          <Education />
          <Section id="projects" title={t('projects.title')}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-sage">
              {t('projects.featured')}
            </h3>
            <FeaturedProjects />
            <h3 className="mb-4 mt-12 text-sm font-semibold uppercase tracking-widest text-sage">
              {t('projects.all')}
            </h3>
            <ProjectGrid />
          </Section>
        </main>
        <Footer />
      </div>
      <ResumeDocument />
    </>
  );
}

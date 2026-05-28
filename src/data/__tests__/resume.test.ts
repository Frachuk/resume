import { resume } from '../resume';
import en from '@/i18n/locales/en.json';

type Items = Record<string, { description: string } | undefined>;
const projectItems = en.projects.items as Items;
const workItems = en.experience.items as Items;
const eduItems = en.education.items as Items;

test('every project has a unique id and a tech stack', () => {
  const ids = resume.projects.map((p) => p.id);
  expect(new Set(ids).size).toBe(ids.length);
  resume.projects.forEach((p) => expect(p.techStack.length).toBeGreaterThan(0));
});

test('every work/education/project id has an English description', () => {
  resume.projects.forEach((p) => expect(projectItems[p.id]?.description).toBeTruthy());
  resume.work.forEach((w) => expect(workItems[w.id]?.description).toBeTruthy());
  resume.education.forEach((e) => expect(eduItems[e.id]?.description).toBeTruthy());
});

test('at least 4 featured projects', () => {
  expect(resume.projects.filter((p) => p.featured).length).toBeGreaterThanOrEqual(4);
});

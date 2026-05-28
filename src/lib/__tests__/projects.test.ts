import { deriveCompanies, deriveRoles, filterProjects } from '../projects';
import type { Project } from '@/types/resume';

const p = (over: Partial<Project>): Project => ({
  id: 'x',
  partner: 'A',
  role: 'Backend Developer',
  name: 'n',
  years: 'y',
  techStack: ['Node'],
  ...over,
});
const list = [
  p({ partner: 'Thanx', role: 'TOE' }),
  p({ partner: 'Rappi' }),
  p({ partner: 'Thanx' }),
];

test('deriveCompanies returns unique sorted partners', () => {
  expect(deriveCompanies(list)).toEqual(['Rappi', 'Thanx']);
});

test('deriveRoles returns unique sorted roles', () => {
  expect(deriveRoles(list)).toEqual(['Backend Developer', 'TOE']);
});

test('filterProjects by company', () => {
  expect(filterProjects(list, { company: 'Rappi', role: null })).toHaveLength(1);
});

test('filterProjects with null filters returns all', () => {
  expect(filterProjects(list, { company: null, role: null })).toHaveLength(3);
});

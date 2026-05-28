import en from '../locales/en.json';
import es from '../locales/es.json';

function keys(obj: object, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'object' && v !== null ? keys(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  );
}

test('en and es have identical key sets', () => {
  expect(keys(es).sort()).toEqual(keys(en).sort());
});


import { t } from './i18n.js';

const DOCTORS = [
  {
    slug: 'dr-fiona-park',
    nameKey: 'about.doctor1Name',
    roleKey: 'about.doctor1Role',
    focusKey: 'teamDetails.focus1',
    image: 'https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c747877e9c706de65ead8_team%20image%20%285%29.png',
  },
  {
    slug: 'dr-john-martin',
    nameKey: 'about.doctor2Name',
    roleKey: 'about.doctor2Role',
    focusKey: 'teamDetails.focus2',
    image: 'https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c746ed25099b1cddcf11a_team%20image%20%284%29.png',
  },
  {
    slug: 'dr-archie-white',
    nameKey: 'about.doctor3Name',
    roleKey: 'about.doctor3Role',
    focusKey: 'teamDetails.focus3',
    image: 'https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c745448e62cb3588e5bce_team%20image%206.png',
  },
  {
    slug: 'dr-maria-angel',
    nameKey: 'about.doctor4Name',
    roleKey: 'about.doctor4Role',
    focusKey: 'teamDetails.focus4',
    image: 'https://cdn.prod.website-files.com/676a470e1aa6955efd039fb4/679c7461bd9d9a04eda1761c_team%20image%20%281%29.png',
  },
];

export function getDemoDoctors() {
  return DOCTORS.map((doctor) => ({
    ...doctor,
    name: t(doctor.nameKey),
    role: t(doctor.roleKey),
    focus: t(doctor.focusKey),
  }));
}

export function getDemoDoctorBySlug(slug) {
  return getDemoDoctors().find(
    doctor => doctor.slug === slug
  ) || null;
}

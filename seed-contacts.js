const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});
const db = getFirestore();

const contacts = [
  { name: 'Anja Meier', email: 'anja.meier@example.com', phone: '+49 151 2345678' },
  { name: 'Ben Fischer', email: 'ben.fischer@example.com', phone: '+49 152 3456789' },
  { name: 'Clara Wagner', email: 'clara.wagner@example.com', phone: '+49 153 4567890' },
  { name: 'David Schulz', email: 'david.schulz@example.com', phone: '+49 154 5678901' },
  { name: 'Elena Krüger', email: 'elena.krueger@example.com', phone: '+49 155 6789012' },
  { name: 'Finn Hoffmann', email: 'finn.hoffmann@example.com', phone: '+49 156 7890123' },
  { name: 'Greta Becker', email: 'greta.becker@example.com', phone: '+49 157 8901234' },
  { name: 'Hannes Zimmermann', email: 'hannes.zimmermann@example.com', phone: '+49 158 9012345' },
];

async function seed() {
  for (const contact of contacts) {
    const ref = await db.collection('contacts').add(contact);
    console.log(`Added: ${contact.name} (${ref.id})`);
  }
  console.log('✅ Done seeding contacts!');
  process.exit(0);
}

seed().catch(err => {
  console.error('Error seeding contacts:', err);
  process.exit(1);
});

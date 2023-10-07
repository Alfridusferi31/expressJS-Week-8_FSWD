const pool = require('./queries.js');
const fs = require('fs');

// Membaca isi file seeding.sql
const seedQuery = fs.readFileSync('db/seeding.sql', { encoding: 'utf8' });

// Menjalankan pernyataan SQL
pool.query(seedQuery, (err, res) => {
  if (err) {
    console.error('Error seeding data:', err);
  } else {
    console.log('Seeding complete');
  }
  // Menutup koneksi database
  pool.end();
});

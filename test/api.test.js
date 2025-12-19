const request = require('supertest');
const app = require('../Week5database/server');

describe('Books API', () => {
  it('GET /api/books should return 200', async () => {
    const res = await request(app).get('/api/books');
    if (res.status !== 200) throw new Error(`Expected 200 got ${res.status}`);
  });
});

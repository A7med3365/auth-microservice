import { app } from '../../app';
import request from 'supertest';

it('responds with details about the current user', async () => {
  //   const signup = await request(app)
  //     .post('/api/users/signup')
  //     .send({
  //       email: 'test@test.com',
  //       password: 'test1234',
  //     })
  //     .expect(201);

  //   const cookie = signup.get('Set-Cookie');

  const cookie = await global.signin();

  const res = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send()
    .expect(200);

  expect(res.body.currentUser.email).toEqual('test@test.com');
});

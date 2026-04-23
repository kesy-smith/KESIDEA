// Note: This is a specification for security tests. 
// In a real environment, you would use @firebase/rules-unit-testing.

/*
import { assertSucceeds, assertFails, initializeTestEnvironment, RulesTestEnvironment } from '@firebase/rules-unit-testing';

let testEnv: RulesTestEnvironment;

beforeAll(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: 'buildwithai2-493714',
    firestore: {
      rules: fs.readFileSync('firestore.rules', 'utf8'),
    }
  });
});

test('Should deny creating user profile for another user', async () => {
  const alice = testEnv.authenticatedContext('alice');
  await assertFails(alice.firestore().doc('users/bob').set({
    uid: 'bob',
    displayName: 'Bob',
    email: 'bob@example.com',
    createdAt: serverTimestamp()
  }));
});

test('Should deny creating score for another user', async () => {
  const alice = testEnv.authenticatedContext('alice');
  await assertFails(alice.firestore().doc('scores/score1').set({
    userId: 'bob',
    theme: 'HTML',
    score: 10,
    total: 10,
    timestamp: serverTimestamp()
  }));
});

test('Should deny list queries for all scores', async () => {
  const alice = testEnv.authenticatedContext('alice');
  await assertFails(alice.firestore().collection('scores').get());
});

test('Should allow list queries for own scores', async () => {
  const alice = testEnv.authenticatedContext('alice');
  await assertSucceeds(alice.firestore().collection('scores').where('userId', '==', 'alice').get());
});
*/

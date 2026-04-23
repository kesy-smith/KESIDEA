# Security Specification - KESIDEA

## Data Invariants
1. A user profile (`/users/{userId}`) can only be created or updated by the user themselves.
2. A score record (`/scores/{scoreId}`) can only be created by the user who achieved it.
3. Users can only list their own scores.
4. Timestamps must be verified against server time.
5. User IDs must match the authenticated user UID.

## The "Dirty Dozen" Payloads

1. **Identity Theft (Create User)**: Attempt to create a user profile for someone else.
   - `path`: `/users/alien-uid`
   - `auth`: `uid: 'my-uid'`
   - `result`: PERMISSION_DENIED

2. **Identity Theft (Create Score)**: Attempt to create a score record for another user.
   - `path`: `/scores/new-score`
   - `data`: `{ userId: 'other-uid', ... }`
   - `auth`: `uid: 'my-uid'`
   - `result`: PERMISSION_DENIED

3. **Data Poisoning (Score)**: Attempt to inject a massive string into the theme field.
   - `data`: `{ theme: 'A'.repeat(2000), ... }`
   - `result`: PERMISSION_DENIED

4. **Negative Score**: Attempt to submit a negative score.
   - `data`: `{ score: -1, ... }`
   - `result`: PERMISSION_DENIED

5. **Score Greater Than Total**: Attempt to submit a score higher than the total questions.
   - `data`: `{ score: 11, total: 10, ... }`
   - `result`: PERMISSION_DENIED

6. **Timestamp Spoofing**: Attempt to use a client-side timestamp instead of server time.
   - `data`: `{ timestamp: '2000-01-01T00:00:00Z', ... }`
   - `result`: PERMISSION_DENIED

7. **Impersonation List**: Attempt to query scores of another user.
   - `query`: `collection('scores').where('userId', '==', 'target-uid')`
   - `auth`: `uid: 'attacker-uid'`
   - `result`: PERMISSION_DENIED

8. **Admin Privilege Escalation**: Attempt to write to a hypothetical admin collection.
   - `path`: `/admins/my-uid`
   - `result`: PERMISSION_DENIED

9. **Ghost Field Update**: Attempt to update a user profile with an unauthorized field (e.g., `isAdmin`).
   - `data`: `{ isAdmin: true, ... }`
   - `result`: PERMISSION_DENIED

10. **Malicious ID**: Attempt to create a document with an extremely long ID.
    - `path`: `/scores/${'a'.repeat(2000)}`
    - `result`: PERMISSION_DENIED

11. **PII Leak**: Attempt to read all users.
    - `query`: `collection('users')`
    - `result`: PERMISSION_DENIED (except for own profile)

12. **Update Immutable**: Attempt to change the `userId` of a score record.
    - `action`: `update`
    - `data`: `{ userId: 'new-uid' }`
    - `result`: PERMISSION_DENIED

## Test Runner
Verified via `firestore.rules.test.ts`.

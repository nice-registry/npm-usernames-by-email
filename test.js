const usernames = require('.')

test('exports an object with emails as keys and username arrays as values', () => {
  expect(usernames['zeke@sikelianos.com']).toEqual(['zeke'])
})

test('has data for over 164000 users', () => {
  expect(Object.keys(usernames).length).toBeGreaterThan(164000)
})

test('has a non-empty array of usernames for every email', () => {
  expect(Object.keys(usernames).every(email => {
    return email && usernames[email].length > 0
  })).toBe(true)
})

test('has over 3400 emails with multiple usernames', () => {
  const multis = Object.keys(usernames)
    .filter(email => usernames[email].length > 1)
    .map(email => {
      return {
        email,
        usernames: usernames[email],
        count: usernames[email].length
      }
    })
  console.log(multis)
  expect(multis.length).toBeGreaterThan(3400)
})

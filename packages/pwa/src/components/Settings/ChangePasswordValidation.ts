import vest, { test, enforce } from 'vest'

export const validation = vest.create((data = {}) => {
  test('currentPassword', 'Current Password is too short', () => {
    enforce(data.currentPassword).longerThanOrEquals(3)
  })

  test('passwordMatch', 'Passwords do not match', () => {
    enforce(data.newPassword).equals(data.repeatedNewPassword)
  })
})

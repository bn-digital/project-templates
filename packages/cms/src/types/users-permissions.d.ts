namespace Strapi {
  namespace UsersPermissions {
    type UserEntity = {
      id: string
      username: string
      email: string
      resetPasswordToken?: string
      password?: string
    }
    type ChangePasswordPayload = {
      oldPassword: string
      newPassword: string
    }
    type AuthContext = { user: UserEntity }
    type UserService = {
      validatePassword(hash: string, newPassword: string): Promise<boolean>
      edit(id: string, params: Partial<UserEntity>): Promise<any>
      fetch(id: string, params?: { populate?: (keyof UserEntity | string)[] | string }): Promise<UserEntity | null>
    }
  }
}

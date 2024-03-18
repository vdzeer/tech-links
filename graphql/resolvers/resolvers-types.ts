import { User, Link } from '@prisma/client'

interface IQuery {
  allUsers: () => Promise<User[]>
  allLinks: () => Promise<Link[]>
}

interface IMutation {
  createUser: (
    parent: undefined,
    args: { email: string; name?: string; password: string }
  ) => Promise<User>

  createLink: (
    parent: undefined,
    args: { title: string; url: string; description?: string; userId: number }
  ) => Promise<Link>
}

interface IUserResolvers {
  links: (parent: User) => Promise<Link[] | null>
}

interface ILinkResolvers {
  user: (parent: Link) => Promise<User | null>
}

export interface Resolvers {
  Query: IQuery
  Mutation: IMutation
  User: IUserResolvers
  Link: ILinkResolvers
}

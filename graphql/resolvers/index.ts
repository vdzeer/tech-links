import { PrismaClient } from '@prisma/client'
import { Resolvers } from './resolvers-types'

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    allUsers: async () => await prisma.user.findMany(),
    allLinks: async () => await prisma.link.findMany(),
  },
  Mutation: {
    createUser: async (_, { email, name, password }) => {
      const newUser = await prisma.user.create({
        data: {
          email,
          name,
          password,
        },
      })
      return newUser
    },
    createLink: async (_, { title, url, description, userId }) => {
      const newLink = await prisma.link.create({
        data: {
          title,
          url,
          description,
          userId,
        },
      })
      return newLink
    },
  },
  User: {
    links: async (parent) =>
      await prisma.user.findUnique({ where: { id: parent.id } }).links(),
  },
  Link: {
    user: async (parent) =>
      await prisma.link.findUnique({ where: { id: parent.id } }).user(),
  },
}

export default resolvers

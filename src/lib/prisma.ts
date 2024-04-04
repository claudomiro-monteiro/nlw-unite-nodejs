import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ['query'],
})

// import { prisma } from '../src/lib/prisma'

async function seed() {
  // Uncomment the line below if you are having issues with the seed script
  // await prisma.event.delete({ where: { slug: 'unite-summit' } })

  await prisma.event.create({
    data: {
      id: '67190943-cbe2-4a5c-affd-f25ca2a4de0e',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}


seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})
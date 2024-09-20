import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
  const getUser = async () => {
    const user = await prisma.authUser.findUnique({
      where: {
        username: String(params.username)
      },
      include: {
        links: true
      }
    })
    if (!user) {
      throw error(404, 'User not found')
    }

    return user
  }

  return {
    user: await getUser()
  }
}

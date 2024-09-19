import { error, fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate()
  if (!session || !session.user) {
    throw error(401, 'Unauthorized')
  }

  const getUser = async (id: string) => {
    const user = await prisma.authUser.findUnique({
      where: {
        id
      }
    })
    if (!user) {
      throw error(404, 'User not found')
    }

    return user
  }

  return {
    user: await getUser(session.user.userId)
  }
};

export const actions: Actions = {
  updateProfile: async ({ request, locals }) => {
    const session = await locals.auth.validate();
    if (!session || !session.user) {
      throw redirect(302, "/login");
    }

    const { name, username } = Object.fromEntries(await request.formData()) as Record<
      string,
      string
    >

    try {
      await prisma.authUser.update({
        where: {
          id: session.user.userId
        },
        data: {
          name,
          username
        }
      })
    } catch (err) {
      console.error(err)
      return fail(500, { message: 'Could not update profile.' })
    }

    return {
      status: 200,
    }
  }
};

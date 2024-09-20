import { error, fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { prisma } from "$lib/server/prisma";
import { isUserNameValid } from "$lib";

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate()
  if (!session || !session.user) {
    throw error(401, 'Unauthorized')
  }

  const getUser = async (id: string) => {
    const user = await prisma.authUser.findUnique({
      where: {
        id
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

    if (!isUserNameValid(username)) {
      return fail(400, { message: 'Invalid username' })
    }

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
  },
  addLink: async ({ locals, request }) => {
    const session = await locals.auth.validate();
    if (!session || !session.user) {
      throw redirect(302, "/login");
    }

    const { url, title, description } = Object.fromEntries(await request.formData()) as Record<
      string,
      string
    >

    try {
      await prisma.link.create({
        data: {
          user_id: session.user.userId,
          url: url,
          title: title,
          description: description ?? null
        }
      })
    } catch (err) {
      console.error(err)
      return fail(500, { message: 'Could not add link.' })
    }

    return {
      status: 200,
    }
  },
  deleteLink: async ({ locals, request }) => {
    const session = await locals.auth.validate();
    if (!session || !session.user) {
      throw redirect(302, "/login");
    }

    const { id } = Object.fromEntries(await request.formData()) as Record<
      string,
      string
    >

    try {
      await prisma.link.delete({
        where: {
          id
        }
      })
    } catch (err) {
      console.error(err)
      return fail(500, { message: 'Could not delete link.' })
    }
  }
};

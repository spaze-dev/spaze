import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
  try {
    const session = await locals.auth.validate()
    if (!session || !session.user) {
      return { user: null }
    }
    const user = session.user
    return { user }
  } catch (error) {
    console.error('Error validating session:', error)
    return { user: null }
  }
}

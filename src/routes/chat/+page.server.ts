import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Completion } from "$lib/model/global";

export const load = (async () => {
    return {
        greeting: "hello world"
    };
}) satisfies PageServerLoad

export const actions = {
    default: async ({ request }) => {
        let completed = false
        //link input "name" attribute
        const data = await request.formData()
        const q = data.get('q')

        const res = await fetch("http://localhost:3001/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                q
            }),
        })
        if (!res.ok) return fail(400, { completed })
        else {
            const completion: Completion = await res.json()
            completed = true
            return { a: completion.a, completed }
        }
    }
} satisfies Actions;
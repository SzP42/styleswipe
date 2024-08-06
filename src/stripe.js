import Stripe from "stripe";
import { env } from "$env/dynamic/private"
// import { STRIPE_SECRET_LIVE_KEY } from '$env/dynamic/private'
// import { STRIPE_SECRET_KEY } from '$env/dynamic/private'

export const stripe = new Stripe(env.STRIPE_SECRET_LIVE_KEY, {
    apiVersion: "2024-06-20"
})


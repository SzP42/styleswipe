import Stripe from "stripe";
import { STRIPE_SECRET_LIVE_KEY } from '$env/static/private'
import { STRIPE_SECRET_KEY } from '$env/static/private'

export const stripe = new Stripe(STRIPE_SECRET_LIVE_KEY, {
    apiVersion: "2024-06-20"
})

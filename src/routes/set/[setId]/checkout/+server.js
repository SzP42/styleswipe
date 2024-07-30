import { json } from '@sveltejs/kit';
import { stripe } from "../../../../stripe"
import { env } from "$env/dynamic/private" 


export async function POST(event) {
    const {params, url } = event
    const { supabase } = event.locals


    const data = await event.request.json()

    const stripe_data = {
    price_data: {
        currency: 'USD',
        product_data: {
            name: data['name'],
            images: data['urlArr']
        },
        unit_amount: data.price * 100
    }, 
    quantity: 1
}


const session = await stripe.checkout.sessions.create({
    line_items: [stripe_data],
    shipping_address_collection: {
        'allowed_countries': [
            'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
            'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
            'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'NO', 'US', 'CA'
        ],

    }, 
    mode: "payment",
    success_url: `${env.BASE}/payment-success`,
    cancel_url: `${env.BASE}/payment-fail`,
})

    return(json({url: session.url}))

}

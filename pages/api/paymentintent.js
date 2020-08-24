import Stripe from "stripe";

const stripe = new Stripe("sk_test_51HGDkmHBrl2UaEgapNVQtZvVU1BTJGs8MA9jKZ8w8Lh0LHs3S1Hs3Sz6heF6AWtiVZESo13DliaVYiXe0k2oRxZm00JfFHS1nq");

export default async (req, res) => {
    if (req.method === "POST") {
        try {
            const { id, amount } = req.body;

            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: "usd",
                description: "10 pack Arepa Lover Stickers",
                metadata: {integration_check: 'accept_a_payment'},
            });
            res.status(200).send(paymentIntent.client_secret);
        }
        catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message});
        }
    } 
    else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};

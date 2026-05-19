NMN|CART|AB35 - Add handwritten note & greeting card option in cart drawer

Hypothesis
If we add a handwritten note and greeting card option directly inside the cart drawer, we expect to increase average order value and conversion rate because customers buying meaningful jewelry can personalize the gift at the final decision point without leaving the checkout flow.

Summary of change:
Add a “Make it a gift” section in the cart drawer where users can select a greeting card SKU and write a handwritten note with a 200-character limit.

Identified problems:
Nominal’s cart heuristic analysis found that there are few upselling options in the cart and that adding low-ticket complementary products like gift wrap or extenders can help increase AOV because they are easy for users to add before checkout.
The same cart analysis notes that the current upsell section has poor contrast and a confusing layout, which may limit interaction with additional offers in the cart.
Nominal’s checkout heuristic analysis also found that additional upselling options are not clearly displayed at checkout, even though this is typically a strong moment to offer extra products because users are already close to purchase.
Device funnel data shows high cart and checkout drop-off on mobile, with mobile checkout abandonment reaching 60%, so any cart add-on needs to feel simple, useful, and not disruptive.
Heatmap insights show that users already interact strongly with upselling options, indicating interest in adding complementary products when they are relevant to the purchase.

What we propose:
Add a “Make it a gift” section inside the cart drawer, below the product list and before the existing upsell area.
Include a toggle for “Add a handwritten note & card,” with pricing shown clearly, for example: “from +$1.99.”
When the toggle is enabled, show selectable greeting card designs using the existing Greeting Card SKUs.
Allow users to write their requested note in a textbox with a 200-character limit.
Add the selected greeting card as a SKU/product line item so the fulfillment center receives the correct item instruction.
Keep the section collapsible or visually contained so it adds value without making the cart feel too long, especially on mobile.

GIFTS
-https://nominalx.com/products/palestinian-blooms-greeting-card-https://nominalx.com/products/seeds-of-gratitude-greeting-card
-https://nominalx.com/products/persian-rugs-greeitng-card
-https://nominalx.com/products/masjid-outline-greeting-card
-https://nominalx.com/products/olive-branch-greeting-card
-https://nominalx.com/products/seeds-of-gratitude-necklace
-https://nominalx.com/products/alhamdulillah-calligraphy-cradle-necklace
-https://nominalx.com/products/love-heart-calligraphy-necklace
-https://nominalx.com/products/gift-card

Metrics:
 Up-sell rate
CVR
RPV

URL Rule:
Cart drawer, triggered when users have at least one product in the cart
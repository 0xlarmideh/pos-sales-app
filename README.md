
# Vita-OS-POS

This project was inspired by [this design](https://dribbble.com/shots/17980547-Vita-POS-Daytime-mode) on dribble. The project is Point-of-sales (POS) web app for businesses, with focus on Restaurants for this design.

## Features
The app has two dashboards:
1. Admin/Operator Dashboard - This is the Opeartor that administers privileges to Sales Reps, Creates account for them, Update inventory prices and quantity, tracks all orders from all Sales Reps and others.
2. Sales Rep Dashboard to checkout items for customers

**Admin Dashboard**
- Privilege settings
- Transaction log
- Total order, with breakdown for each Rep
- Update/Modify/Delete/Add items to inventory, also update prices and quantity.
- Store Analytics
- Products page
- Settings page
- Track transactions (Pending|Approved|Declined)


**Sales Rep Dashboard**
- Checkout orders
- Add/remove items to cart
- Track transactions (In Progress|Ready)
- Checkout view

First, run the development server:

```bash
npm run dev

```
## Collaborators
This project is built with love by **Abdulhameed Busari** and **Bright Iortsor**

## Tech Stack
NextJs | TypeScript | Material UI | Redux | Firebase(Firestore)
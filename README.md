# Sales Dashboard

A full-stack sales data visualization and management application built with React and integrated with Supabase for robust authentication and database security. This project focuses on implementing advanced user authentication, role-based access control (RBAC), and real-time data handling.

## Setup

```bash
# Clone the repository
git clone <repo-url>

# Install dependencies
npm install

# Run the development server
npm run dev
```

*(Note: Requires setting up a Supabase project and configuring environment variables for connection.)*

## Key Concepts and Technologies

This project demonstrates proficiency across several critical modern web development paradigms, focusing heavily on secure and structured data access.

### 1. React Architecture & State Management

**React Router DOM:** Utilized for declarative navigation across the application, separating public access (Sign Up, Sign In) from protected areas (Dashboard).

* **Protected Routes:** Implemented authentication guards to ensure only signed-in users can access the main Dashboard page.
* **AuthContext (Context API):** Created a global context to manage the user's authentication state, session details, and account type (`Admin` or `Rep`). This pattern allows any component to quickly access authorization data without prop drilling.

### 2. Full-Stack Authentication & Database Integration (Supabase)

**Supabase Authentication & JWTs:** Used Supabase's built-in authentication services to handle user registration, sign-in, and session management using JSON Web Tokens (JWTs). 

**Sign In/Up/Out Flow:** Developed complete functionality for user lifecycle management, including clear feedback and automatic redirection upon state changes.

### 3. Advanced Database Security & Logic

**Row Level Security (RLS):** This was a key learning objective. Implemented RLS policies directly in Supabase to enforce data access constraints at the database level. For example, ensuring a Rep user's database query only returns their own sales deals. 

**Database Trigger for User Profiles:** Set up a Supabase trigger to automatically update a separate `user_profiles` table upon a successful user sign-up event. This trigger seamlessly saves the new user's name and crucial `account_type` (role) without requiring a second, potentially failed, API call from the client.

## Role-Based Access Control (RBAC) Implementation

The application leverages the `account_type` stored in the AuthContext to implement granular control over data submission:

* **Data Aggregation:** The dashboard successfully fetches and aggregates all sales deals, demonstrating complex database querying capabilities.
* **Admin Privileges:** Users with the `Admin` role are authorized to use the sales form to submit new sales deals for any user in the system.
* **Rep Constraints:** Users with the `Rep` role are restricted to submitting new sales deals only for their own user ID, a constraint enforced both on the client side (UI logic) and the server side (RLS policies).

## Learning Highlights

This project solidified the understanding of building truly secure applications by implementing authentication and authorization across all layers (client-side context, server-side JWTs, and database-level RLS). The most significant highlight was mastering how to leverage the server's capabilities (RLS and Triggers) to simplify client-side logic and enforce non-negotiable security policies, resulting in a more robust and scalable application structure.
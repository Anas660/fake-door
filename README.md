## Fake Door Challenge

This repository demonstrates a simple lesson listing and viewing application, integrating login functionality and lesson content.

# What's been done

- Integrated Lessons list from` https://fake-door-develop.azurewebsites.net/api/lessons/get-simple`
- Integrated Lesson 01 from `/assets/lesson01`
- Login Functionality: Integrated basic login with credentials.

# Environment Setup

Node Version: v20.10.0

# Preparation

Follow the steps below to run the project locally.
In the fake-door repo `git clone main`
Navigate to the project directory `cd <repository-directory>`
Install dependencies `npm install`
Run the development server `npm run dev`

### Test Scenarios

- [ ] Visit "localhost:3000" to check the Lessons list and lesson 01
- [ ] Visit "localhost:3000/login" to check the login functionality.

# Login Credentials

- email: fakedoor@challenge.com
- password: password123

# Host URL

https://fakedoorchallenge.netlify.app/

# Tech Stack

Frontend Framework: Next.js
Programming Language: TypeScript
UI Component Library: Material-UI
Routing: Built-in routing capabilities of Next.js
API Requests: Axios
Deployment: Netlify

# Approaches Used

Component-Based Architecture: The app follows a modular, component-based structure, making the codebase easier to maintain, update, and scale. Each UI element is encapsulated in its own reusable component.
TypeScript for Type Safety: TypeScript helps catch errors early during development by enforcing strong typing. This ensures a more stable and predictable codebase while improving the overall developer experience.
Material-UI for Responsive Design: Material-UI is leveraged for building a responsive and consistent user interface. Its pre-designed components follow modern UI/UX guidelines and adapt seamlessly to different screen sizes and devices, improving both development speed and the user experience.
API Integration with Axios: Axios is used for making HTTP requests to external APIs, ensuring efficient and clean data handling in the app. Its promise-based structure simplifies asynchronous operations, enhancing the app’s data-fetching capabilities.

# Future improvement/What we could have done

Enhanced Authentication: Implementing OAuth or JWT-based authentication for improved security.
User Profiles: Adding user profiles to personalize the experience and store user-specific settings or preferences.
SEO Enhancements: Optimizing the app for search engines by adding meta tags, structured data, and dynamic head tags.
Unit Testing: Ideally, we would perform unit testing using libraries such as Jest and React Testing Library. However, due to time constraints, testing is planned for a future phase to ensure robust and error-free code.
Lesson Progress Tracking: Adding features for tracking lesson progress, saving user progress, and providing a more interactive learning experience.

# CORS Policy Requirement

The provided api url `https://fake-door-develop.azurewebsites.net/api/lessons/get-simple` has a strict cross-origin policy, which means you might encounter issues accessing resources, To fetch the list of lessons, you can use an extension that allows cross-origin policy, for example https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en-US&utm_source=ext_sidebar

# Demo Video

https://www.loom.com/share/57471caf359b424a9a4c597990ef8fa2

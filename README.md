# <div align='center'> [🌐Secure File Sharing App🚀](https://file-share-next.vercel.app/) </div>

![hero-section](https://github.com/SaadMahi/84-File-Sharing-App/assets/117567622/c7253a9f-18c4-4089-82fd-dff52978f737)
![auth-section](https://github.com/SaadMahi/84-File-Sharing-App/assets/117567622/edf40484-a894-47d2-8f1d-6b98320d5843)

## File Share Application Overview

## Description

File Share is a web application that allows users to upload, save, and share files in one centralized platform. It provides an intuitive interface for managing files and offers features for easy sharing and accessibility.

## Technologies Used

- Next.js: Next.js is a React framework that enables server-side rendering, routing, and other functionalities for building web applications.
- Clerk: Clerk is used for authentication and user management in the application.
- React Toastify: React Toastify is used for displaying toast notifications in the application.
- Tailwind CSS: Tailwind CSS is a utility-first CSS framework used for styling the application.

## Features

1. **User Authentication**: The application leverages Clerk for user authentication, allowing users to securely log in and manage their accounts.
2. **File Management**: Users can upload files to the platform, save them, and organize them effectively.
3. **File Sharing**: Users can easily share files with others by generating shareable links or directly sharing files through the application.
4. **Responsive Design**: The application is built with responsive design principles to ensure optimal user experience across various devices and screen sizes.

## Project Folder Naming Conventions

In this project, we have adopted a specific naming convention for our folders. We use the underscore `_` and parentheses `()` symbols in our folder names.

## Why Use `_` and `()` in Folder Names?

The reason behind this is related to how Next.js, the framework we're using, handles routing.

In Next.js, the file-system is the main API. Every `.js` file becomes a route that gets automatically processed and rendered. However, there are cases where we don't want certain data or folders to be treated as routes.

To handle this, we use `_` and `()` in our folder names. Here's how it works:

- **Folders with `_` Prefix**: Any folder name prefixed with an underscore `_` will not be treated as a route by Next.js.
- **Folders with `()`**: Similarly, folders with names enclosed in parentheses `()` will also not be treated as routes by Next.js.

By following this convention, we can better organize our project and control how Next.js generates routes from our file system.

Please ensure to follow this convention when adding new folders to the project.

Happy coding! 😊

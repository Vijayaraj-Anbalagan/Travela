# Travela: Personalized Travel Itinerary Generator

Travela is a cutting-edge web application designed to enhance the travel planning experience by delivering personalized itineraries tailored to individual preferences. Utilizing advanced AI through IBM Watson Assistant, Travela offers an interactive quiz that captures user interests, dietary restrictions, accommodation preferences, and transportation choices. Built with Next.js and styled with TailwindCSS, Travela integrates seamlessly with Firebase, providing a dynamic and responsive user experience.

## Features

- **Personalized Itineraries:** Generate custom travel plans based on user inputs via an engaging quiz interface.
- **AI Integration:** Leverages IBM Watson Assistant to understand and process user preferences for tailored suggestions.
- **Modern Architecture:** Built with Next.js for server-side rendering and optimal page performance.
- **Responsive UI:** Designed with TailwindCSS for a modern, mobile-first user interface.
- **Real-Time Data Management:** Uses Firebase for storing user data and managing sessions in real time.

## Technology Stack

- **Frontend:** Next.js (React framework)
- **Styling:** TailwindCSS
- **Backend:** Firebase Realtime Database for data storage and session management
- **AI Service:** IBM Watson Assistant for processing natural language

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/travela.git
   cd travela
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```plaintext
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id_here
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket_here
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id_here
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id_here
   NEXT_PUBLIC_WATSON_API_KEY=your_watson_api_key_here
   NEXT_PUBLIC_WATSON_URL=your_watson_url_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Usage

Navigate to `http://localhost:3000` to view the application. Complete the interactive quiz to receive a personalized travel itinerary based on your preferences.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Contact

Your Name - [@Vijayaraj-Anbalagan](https://www.linkedin.com/in/vijayaraj-anbalagan-6595a3243/)

Project Link: [https://github.com/yourusername/travela](https://github.com/Vijayaraj-Anbalagan/travela)

### Notes:
- **Environment Variables:** The environment variable names are prefixed with `NEXT_PUBLIC_` to make them available on the client-side in a Next.js application.
- **Setup Instructions:** The instructions are specific to Next.js, including commands for both npm and yarn, reflecting common usage in the Next.js community.
- **Hosting:** Remember to deploy your Next.js app on platforms like Vercel or Netlify for best results, as these platforms offer direct support for Next.js projects.

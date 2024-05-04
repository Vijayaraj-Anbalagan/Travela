# Travela: Personalized Travel Itinerary Generator

Travela is a web application designed to enhance travel planning by delivering personalized travel itineraries tailored to individual preferences. Leveraging the power of IBM Watson Assistant for AI-driven interactions, Travela offers an interactive quiz that captures users' interests, dietary preferences, accommodation needs, and transportation choices to generate custom travel plans.

## Features

- **Personalized Itineraries:** Generate travel plans based on user-inputted preferences through a dynamic quiz.
- **AI-Powered Interactions:** Utilizes IBM Watson Assistant to understand and process user preferences.
- **Responsive Design:** Built with React and TailwindCSS for a sleek, user-friendly interface.
- **Real-Time Data Handling:** Integrates seamlessly with Firebase Realtime Database to store and manage user data efficiently.

## Technology Stack

- **Frontend:** React.js
- **Styling:** TailwindCSS
- **Backend:** Firebase Realtime Database
- **AI Integration:** IBM Watson Assistant

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- npm (Node Package Manager)
- Git

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/yourusername/travela.git
Install NPM packages
sh
Copy code
cd travela
npm install
Create a .env file in the root directory and add the following:
plaintext
Copy code
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id_here
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket_here
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id_here
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id_here
REACT_APP_WATSON_API_KEY=your_watson_api_key_here
REACT_APP_WATSON_URL=your_watson_url_here
Start the development server
sh
Copy code
npm start
Usage
After setting up the project, you can access the web application at http://localhost:3000. Complete the quiz to receive your personalized travel itinerary based on your preferences.

Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.

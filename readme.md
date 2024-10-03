# I-Math

I-Math is a simple web application built using React.js and FastAPI. It serves as a tool that allows users to draw on a canvas, sending the images to the Google Gemini Generative AI models for analysis. The application processes the image and returns a response to the frontend, enabling interactive features based on the user's drawings.

## Features

- **Drawing Canvas**: Users can create drawings directly on a canvas.
- **AI Analysis**: Drawings are sent to Google Gemini's generative AI models for analysis.
- **Real-time Feedback**: Responses from the AI are returned to the frontend for an interactive experience.

## Technologies Used

- **Frontend**: React.js and tailwind css
- **Backend**: FastAPI
- **AI Integration**: Google Gemini Generative AI

## Getting Started


### Frontend Setup

1. Clone the repository:
   ```bash
   git clone  https://github.com/bhargav-yarlagadda/IMath.git
   cd frontend
   npm install 
   npm run dev


### Backend Setup and Execution


### Setup Instructions

Follow these steps to set up the backend project and run it.

### 1. Clone the Repository


```bash
#move to backend directiory
    cd backend

### to run the server
# Create a virtual environment named 'venv'
   python -m venv venv

# Activate the virtual environment
   venv\Scripts\activate

   pip install -r requirements.txt

#to run the server
   py main.py 

#after completion deactivate the vitual env
   deactivate



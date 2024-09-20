# FastAPI Backend Setup and Execution

This guide will help you set up the FastAPI backend project, manage dependencies using a virtual environment, and run the app from scratch.

## Prerequisites

Ensure you have the following installed on your system:

- **Python 3.7+**
- **pip** (comes with Python)
- **Git** (optional but recommended for cloning repositories)

---

## Setup Instructions

Follow these steps to set up the backend project and run it.

### 1. Clone the Repository

Clone the project repository using Git, or download the project folder to your local machine.

```bash
git clone https://github.com/your-repository-link.git
cd your-repository

# Create a virtual environment named 'venv'
```bash
python -m venv venv

# Activate the virtual environment
```bash
.\venv\Scripts\activate

```bash
pip install -r requirements.txt

```bash
pip freeze

#to run the server
```bash
py main.py 

#after completion deactivate the vitual env
```bash
deactivate

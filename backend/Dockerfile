# Use an official Python runtime as the base image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file to the working directory
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project to the working directory
COPY . .

# Set the Flask app environment variable
ENV FLASK_APP=app.py

# Expose the port on which the Flask app will run (if needed)
EXPOSE 5000

# Define the command to run when starting the container
CMD ["flask", "run", "--host=0.0.0.0"]

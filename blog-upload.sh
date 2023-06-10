#!/bin/bash

# Define the URL of your server
SERVER_URL="http://localhost:5000/api/blogs"

# Define the path to the JSON file
JSON_FILE="./blog.json"

# Send a POST request to the server with the JSON data
curl -X POST -H "Content-Type: application/json" -d @"$JSON_FILE" "$SERVER_URL"

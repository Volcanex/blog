Why is giving me every single package I've ever installed this is so weird ! I'm so bad at these things, I'm just cleaning it out manually. 

Docker is hosted here!
http://localhost:5001/

Locally hosted at
http://127.0.0.1:5000/

If running locally; from the backend directory run:

source venv/bin/activate

Once in the virtual enviroment (venv) run:

export FLASK_APP=app
flask run

TO UPDATE THE REQUIREMENTS FILE:

source venv/bin/activate
pip freeze > requirements.txt

WHEN RUNNING WITH DOCKER, YOU WILL NEED TO UPDATE THE REQUIREMENTS FILE IF INSTALLING NEW PACKAGES IN THE VENV! MAYBE?

Here's a solution I can't be bothered to implement just now because it doesn't even seem to full fix the problem:

You're correct, by default, the pip freeze > requirements.txt command doesn't automatically update the requirements.txt file when you install new packages within the virtual environment (venv). This means that you would need to manually run the command each time you install a new package.

To automate the process of updating the requirements.txt file whenever a new package is installed, you can use a tool like pip-tools or pipreqs. These tools generate the requirements.txt file based on the packages installed within the virtual environment.

Here's how you can use pip-tools to automatically update the requirements.txt file:

Install pip-tools by running the following command:

shell
Copy code
pip install pip-tools
Activate the virtual environment (venv) for your backend.

Create a new file called requirements.in in your backend directory (alongside the existing requirements.txt file).

In the requirements.in file, list all the direct dependencies of your Flask application, one package per line. For example:

makefile
Copy code
Flask==2.3.2
Flask-PyMongo==2.3.0
This file serves as the input file for pip-tools.

Generate the updated requirements.txt file by running the following command:

shell
Copy code
pip-compile --output-file requirements.txt requirements.in
This command will automatically generate an updated requirements.txt file based on the packages listed in the requirements.in file and their resolved dependencies.

By following these steps, whenever you install a new package or update an existing one within the virtual environment, you can simply rerun the pip-compile command, and it will generate an updated requirements.txt file with the correct package versions.

Remember to include the generated requirements.txt file in your Docker image so that it reflects the correct package dependencies.

I apologize for any confusion caused earlier, and I hope this solution meets your requirements. Let me know if you have any further questions!
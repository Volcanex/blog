Portfolio Site

Using craco to override create react app without messing up the webpack.

DOCKER:

The docker flask server runs here: http://localhost:5001/
The docker react app runs here: http://localhost:3001/
The mongodb should run here: http://localhost:27017/ (no local)

If you run them locally they should go where the terminal says they go.

I was getting some grief with the requirements.txt in the backend. When I install a new dependency (say I'm working on the flask backend) I need to manually recreate the requirements.txt - this really bugs me.

I'm still new to docker (I only learned how to use it this evening), I need to create mounts so I can edit the files and have them run on the docker servers. For now I might just use the local enviroments / servers to develop the application and occasionally test them on the docker. I might get into some trouble with the ports though but that should be straightforward enough to solve. 

The mongodb is gonna run solely on docker. Which seems fine with me.

NPM audit is throwing a hissy fit. I don't understand how I have 6 vulnerabilities.
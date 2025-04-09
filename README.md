
What does publishing mean?
- We only want production dependencies
- We want to change the environment to production

How to do a production install of node?
- npm install --production

The Dockerfile
- Set of instruction to create a production running application
- Node
- Code
- install --production
- set environment variables
- tell it how to run

.dockerignore
- Essentially the same as .gitignore
- tells docker what not to copy over

EXPOSE + ENV
- EXPOSE is like documentation sayng "this application is exposed on this port" its for Docker and tools that use Docker to know.
- ENV is how we set environment variables

Building the image
- docker build -t (tag) name-of-image:tag (if left out defaults to :latest) . (build from the Dockerfile in the current directory).

Running the container
- docker run -p (port forwarding) hostport:containerport image-name
- The host port is where you can access it (localhost)
- The container port is what the application is listening for (3000 in our case)

What all got packaged?
- Our source code (app.js)
- package and package lock
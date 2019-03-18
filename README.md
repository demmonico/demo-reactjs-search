# Test ReactJS application

Test ReactJS application describing interact between applications

## Actions

### Build

```bash
docker build -t reactjs .

```

### Create project into blank folder

```bash
docker run -d -p 3000:80 --name react -v /Users/dep/Projects/reactjs/codebase:/usr/app reactjs npx create-react-app .

```

### Run

```bash
docker run -d -p 3000:3000 --name react -v /Users/dep/Projects/reactjs/codebase:/usr/app reactjs

```

Now it available at `http://localhost:3000`.
Enjoy!

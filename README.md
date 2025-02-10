# Microservices with Docker and Docker Compose

## 📝 About the Project
This project demonstrates a microservices architecture using Docker and Docker Compose. It includes a Node.js service, a Python service, and a MongoDB database. The Node.js service is accessible externally, while it communicates internally with the Python and MongoDB services. The Python and MongoDB services are not exposed to the outside world.

## 🚀 Tech Stack
- **Node.js** - Backend service (accessible externally)
- **Python (Flask)** - Internal microservice (accessed by Node.js)
- **MongoDB** - Database (accessible only by Node.js and Python services)
- **Docker & Docker Compose** - Containerization and orchestration


## 🏗️ Architecture

```
                     ┌────────────────────────┐
                     │        Client          │
                     │    (External User)     │
                     └──────────▲────────────┘
                                │ (Exposed Port)
                                │
                     ┌──────────▼──────────┐
                     │   Node.js Service   │
                     │ (Accessible via Port) │
                     └───▲───────────▲──────┘
                         │           │
       ┌────────────────┘           └────────────────┐
       │                                             │
┌──────▼───────────┐                         ┌──────▼───────────┐
│ Python Service   │                         │ MongoDB Service  │
│ (No Public Port) │                         │ (No Public Port) │
└──────────────────┘                         └──────────────────┘
```


### 🔧 Setup & Run
Clone the repository:
```sh
git clone https://github.com/SuranSandeepa/scybers-docker-microservices.git
cd scybers-docker-microservices
```

Build and start the services:
```sh
docker-compose up --build
```

Stop the services:
```sh
docker-compose down
```

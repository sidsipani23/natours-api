# Natours API

This repository contains the Node.js implementation of the Natours API. Natours is a touring service which provides tours in various areas around the world.

## Installation

Use npm for installation of the node modules. Follow the below command:

```bash
npm install
```

## dependencies

```json
{
  "bcryptjs": "^2.4.3",
  "dotenv": "^16.3.1",
  "express": "^4.18.2",
  "express-mongo-sanitize": "^2.2.0",
  "express-rate-limit": "^7.1.5",
  "helmet": "^7.1.0",
  "hpp": "^0.2.3",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.0.3",
  "morgan": "^1.10.0",
  "nodemailer": "^6.9.7",
  "slugify": "^1.6.6",
  "validator": "^13.11.0",
  "xss-clean": "^0.1.4"
}
```

## devDependencies

```json
{
  "eslint": "^5.16.0",
  "eslint-config-airbnb": "^17.1.0",
  "eslint-config-prettier": "^4.1.0",
  "eslint-plugin-import": "^2.17.2",
  "eslint-plugin-jsx-a11y": "^6.2.1",
  "eslint-plugin-node": "^8.0.1",
  "eslint-plugin-prettier": "^3.0.1",
  "eslint-plugin-react": "^7.12.4",
  "prettier": "^1.17.0"
}
```

## Usage

```bash
Please create config.env file with the below values:

NODE_ENV=development
PORT=3000
DATABASE=<<CONNECTION_STRING>>
DATABASE_PASSWORD=<<DATABASE_PASSWORD>>
JWT_SECRET=<<JWT_SECRET>>
JWT_EXPIRES_IN=<<JWT_EXPIRES_IN>>
JWT_COOKIE_EXPIRES_IN=<<JWT_COOKIE_EXPIRES_IN>>
EMAIL_USERNAME=<<EMAIL_USERNAME>>
EMAIL_PASSWORD=<<EMAIL_PASSWORD>>
EMAIL_HOST=<<EMAIL_HOST>>
EMAIL_PORT=<<EMAIL_PORT>>
```

```bash
After installation and creating the config.env, to run the Node.js server

In dev environment:
npm run start:dev

In prod enviroment:
npm run start:prod
```

```bash
To run the debugger:
npm run debug
```

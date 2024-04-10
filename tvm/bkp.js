/**
 * {
  "name": "backend",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "license": "UNLICENSED",
  "scripts": {
    "start": "node bin/server.js",
    "build": "node ace build",
    "dev": "node ace serve --watch",
    "test": "node ace test",
    "lint": "eslint .",
    "format": "prettier --write .",
    "typecheck": "tsc --noEmit"
  },
  "imports": {
    "#controllers/*": "./app/controllers/*.js",
    "#exceptions/*": "./app/exceptions/*.js",
    "#models/*": "./app/models/*.js",
    "#mails/*": "./app/mails/*.js",
    "#services/*": "./app/services/*.js",
    "#listeners/*": "./app/listeners/*.js",
    "#events/*": "./app/events/*.js",
    "#middleware/*": "./app/middleware/*.js",
    "#validators/*": "./app/validators/*.js",
    "#providers/*": "./providers/*.js",
    "#policies/*": "./app/policies/*.js",
    "#abilities/*": "./app/abilities/*.js",
    "#database/*": "./database/*.js",
    "#start/*": "./start/*.js",
    "#tests/*": "./tests/*.js",
    "#config/*": "./config/*.js"
  },
  "devDependencies": {
    "@adonisjs/assembler": "^7.1.1",
    "@adonisjs/eslint-config": "^1.2.1",
    "@adonisjs/prettier-config": "^1.2.1",
    "@adonisjs/tsconfig": "^1.2.1",
    "@japa/api-client": "^2.0.2",
    "@japa/assert": "^2.1.0",
    "@japa/plugin-adonisjs": "^3.0.0",
    "@japa/runner": "^3.1.1",
    "@swc/core": "^1.3.107",
    "@types/luxon": "^3.4.2",
    "@types/node": "^20.11.10",
    "eslint": "^8.56.0",
    "pino-pretty": "^10.3.1",
    "prettier": "^3.2.4",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.3"
  },
  "dependencies": {
    "@adonisjs/auth": "^9.1.1",
    "@adonisjs/core": "^6.2.2",
    "@adonisjs/cors": "^2.2.1",
    "@adonisjs/lucid": "^20.1.0",
    "@vinejs/vine": "^1.7.1",
    "better-sqlite3": "^9.4.5",
    "luxon": "^3.4.4",
    "reflect-metadata": "^0.2.1"
  }//,
  //"eslintConfig": {
    //"extends": "@adonisjs/eslint-config/app"
  //},
  //"prettier": "@adonisjs/prettier-config"
}

 */
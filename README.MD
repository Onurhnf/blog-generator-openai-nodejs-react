# Blog Content Generator Documentation

## Table of Contents

1. [Setup Instructions](#1-setup-instructions)
2. [API Usage and Limits](#2-api-usage-and-limits)
3. [Data Model](#3-data-model)
4. [Scheduling Mechanism](#4-scheduling-mechanism)
5. [Testing](#5-testing)

---

## 1. Setup Instructions

### Frontend (React.js)

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the frontend directory:**

   ```bash
   cd blog-client
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   The frontend should be accessible at `http://localhost:3000`.

### Backend (Back4App)

1. **Create a Back4App account at [https://www.back4app.com/](https://www.back4app.com/).**

2. **Create a new app and note the App ID and JavaScript Key.**

3. **Set up environment variables:**

   Create a `.env` file in the backend directory with the following content:

   ```env
   PORT=3001
   OPENAI_API_KEY=<your_openai_api>
   BACK4APP_APP_ID=<your_app_id>
   BACK4APP_JS_KEY=<your_js_key>
   ```

4. **Install dependencies:**

   ```bash
   npm install
   ```

5. **Start the backend server:**

   ```bash
   npm run start:dev
   ```

   The backend should be accessible at `http://localhost:3001`.

## 2. API Usage and Limits

### OpenAI's ChatGPT API

- **Model:** `gpt-3.5-turbo`

## 3. Data Model

### Blog Post Model

Your Back4App database should have a `Post` class with at least the following fields:

- `title` (String): The title of the blog post.
- `content` (String): The content of the blog post.

## 4. Scheduling Mechanism

### Automatic Content Generation

Content generation is scheduled using a Node.js script and cron jobs. The script periodically triggers(4 hours in this project) the ChatGPT API to generate content on specific programming topics. The generated content is then saved to the Back4App database under the `Post` class.

- **Cron Script Location:** `blog-api/app.js`
- **Cron Job Setup:** Set up a cron job to run the script at your desired interval. Example:

  ```bash
  * * * * *
  ```

  The above cron job runs the script every minutes.

## 5. Testing

```bash
  npm run test
```

The above works on both backend and frontend tests.

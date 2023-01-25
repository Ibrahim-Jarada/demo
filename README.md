# Demo

  

## Links
- [Schema](https://drawsql.app/teams/gsg-16/diagrams/articles-management-system-operations-api-based-app)


## Technologies
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [SendGrid](https://sendgrid.com/)
- [AWS-S3](https://aws.amazon.com/s3/)
<p align="right"><a href="#top">back to top</a></p>

## Getting Started
 Follow these simple steps to get a local copy up and running.
 
 1. Create a free - [AWS-S#](https://aws.amazon.com/s3/) and [SendGrid](https://sendgrid.com/) accounts.
 
 2. Clone the repo 
 ```
 https://github.com/Ibrahim-Jarada/demo.git
 ```

 3. Install NPM packages (in project root folder)
 ```
 cd demo && npm install
 ```
 4. In project root folder add `.env.development` file and and fill in the environment variables
  ```
# As a start you should create .env.development file and put all those variables in it 
# Or You can ask us and we will provide you with the necessary

DATABASE_URL=postgres://<user>:<password>@localhost:5432/<dev_db>
JWT_SECRET=<Your JWT Secret>
PORT=<Your API PORT>
APP_MAIL=<Your app email>
MAIL_PASSWORD=<Your app email password>

SENDGRID_ADMIN_EMAIL=<Your SendGrid email>
SENDGRID_API_KEY=<Your SendGrid API key>
SENDGRID_VERIFICATION_TEMPLATE_ID=<Your SendGrid template id>
SENDGRID_RESET_PASSWORD_TEMPLATE_ID=<Your SendGrid template id>
SENDGRID_APPROVAL_TEMPLATE_ID=<Your SendGrid template id>
SENDGRID_REJECTION_TEMPLATE_ID=<Your SendGrid template id>
NEXTUP_COMEDY_SUPPORT_EMAIL=<Support Email>

AWS_BUCKET_NAME=<add your bucket name here, if you care>
AWS_BUCKET_REGION=<your region too buddy>
AWS_ACCESS_KEY_ID=<add your access key too>
AWS_SECRET_ACCESS_KEY=<add your secret that no one knows it>
```
5. Start building database

```
npm run build:db
```

6. Start the development sever
```
npm run dev
```

7. In order to test the app you can use Postman collection included in the repo 

```
./demo/rating.postman_collection.json
```

## Database Schema
![](https://i.imgur.com/pYKVbhL.png)

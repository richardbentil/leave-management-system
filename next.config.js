/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGODB_URI:
      "mongodb+srv://admin-palo:uMexTO37dgJ3OezS@cluster-palo-foods.j3b6f.mongodb.net/?retryWrites=true&w=majority",
    MONGODB_DB: "bookaride",

    NEXT_SECRET: "683caef9-86dd-4d69-bf0f-d152f0049d94",

    MAIL_HOST: "mail.palofoods.com",
    MAIL_PORT: 465,
    MAIL_AUTH_USER: "info@palofoods.com",
    MAIL_AUTH_PASSWORD: "N1Wh9-,.;qtw",

    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: "AIzaSyBGeHpwAD3ekyCtBEKUyzabCVVam7X-FJs",

    NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY: "pk_test_d53f47db9828faa5655381d54a5adff5ee22c951",

    SMS_API_KEY: "V1ZNVExweWp5em9qdGJRRG1rYmY=",
  }
}

module.exports = nextConfig

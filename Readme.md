# metal-pay-connect-example-javascript

## First, run your backend server. Please refer to the [metal-pay-connect-nodejs-examaple](https://github.com/MetalPay/metal-pay-connect-nodejs-example).

## Project setup

Add your `BACKEND_API_BASE_URL` to your `.env` file. If you are runnning it locally, this is most likely `http://localhost:3005` because we set the backend example to default to that. You can also Refer to our `.env.example`. If you are using typescript, you may also want to add `BACKEND_API_BASE_URL: string` to your `env.d.ts` file.

```
npm install
```

```
npm run build
```

```
npm run start
```

# Note:

You must run the `npm build` to bundle your assets. If you don't, you will not see the widget running in your app.

# Troubleshooting:

If you still don't see it running. Open your web dev tools -> network tab -> disable cache (checkbox).

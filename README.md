# Customer Products Technical Interview

Using the library you built at home, [fetch some financial securities data](#using-our-securities-quotes-api) (also known as stock prices), and use it to populate a client-side component with their percentage change for the day. It could look something like the following.

![Screenshot of an example securities data component](https://user-images.githubusercontent.com/51677/67555386-b6c5fc80-f700-11e9-86bd-55e975be0441.png)

We are more interested in how you work than in how much code you write. Treat this like a pair programming session, we are here to help so ask us questions and let us know what you are doing and why. You can use Google or any other resources you would like.

We're not expecting you to complete this exercise, do only as much as you can within the time that we have.

## Getting started

1. Clone the exercise with `git clone git@github.com:Financial-Times/next-tech-interview-exercise.git`
2. Install the dependencies with `npm install`
3. Start the app with `npm start`
4. Run the tests with `npm test`
2. Add your library to `lib/fetch.js`
5. To get developing, have a look in `app.js`

## Using our Securities Quotes API

To fetch the day's percentage change for a security you can use our Securities Quotes API.

**HTTP Request**

`GET https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes`

**URL Query Parameters**

| Parameter | Description |
|-----------|-------------|
| `symbols` | Any valid symbol for a security, e.g. for the FTSE 100 use `FTSE:FSI`. |

**Symbols**

We would like you to display the information from the following symbols (these are the securities we show on the [FT.com front page](https://www.ft.com) 📰).

| Security        | Symbol     |
|-----------------|------------|
| FTSE 100        | `FTSE:FSI` |
| S&P 500         | `INX:IOM`  |
| Euro/Dollar     | `EURUSD`   |
| Pound/Dollar    | `GBPUSD`   |
| Brent Crude Oil | `IB.1:IEU` |

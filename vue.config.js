// this file configures the deploy of this project according to the below path

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/app/openweather-client-app/'
        : '/'
}

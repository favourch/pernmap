[![Latest Stable Version](https://img.shields.io/github/release/busayo/meanmap.svg?style=flat-square)](https://github.com/busayo/meanmap/releases)
![](https://img.shields.io/badge/unicodeveloper-approved-brightgreen.svg)

## Meanmap

Meanmap is an interactive map for Mean Stack Developers all over the world. The mean stack has become one of the biggest communities of fans, contributors and backers worldwide. It provides an avenue where a mean stack developer can easily identify another developer in his local environment especially where there is no local meetup group.

## Installation

1. Clone this repository: `git clone git@github.com:unicodeveloper/meanmap.git meanmap/`
2. `cd` into the meanmap folder.
3. Create a `.env` file in the root directory and add the appropriate env variables like so:
    1. SESSION_SECRET=ilovemeanmap
    2. MONGODB=mongodb://localhost:27017/meanmap
    ....
Check the `config/secrets.js` to have an idea of all the environment variables to fill in.
4. Now, run the following commands:
    1. Run `npm install`
    2. Run `nodemon server.js`
5. Start up MongoDB by running `mongod` from the terminal or whatever way you normally start up your mongoDB.
6. Open your chrome browser and see the application on `localhost:3000`


## Contributing

Thank you for considering contributing to Meanmap! The contribution guide is as follows:

#### Submit a pull request in this format:

##### A new feature
[Meanmap][#Feat] *Short Description of the Feature*

##### A Fix for a bug
[Meanmap][#Fix] *Short Description of the Fix to a bug on the app*


## Security Vulnerabilities
If you discover a security vulnerability within Meanmap, please send an e-mail to Prosper Otemuyiwa at prosperotemuyiwa@gmail.com. All security vulnerabilities will be promptly addressed.

### License
Meanmap is open-sourced software licensed under the [MIT license](https://github.com/busayo/meanmap/blob/master/LICENSE)

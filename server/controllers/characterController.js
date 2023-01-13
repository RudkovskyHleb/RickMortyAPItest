const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')
const {response} = require("express");
const axios = require('axios');
class CharacterController{
    async findCharacters(request, response) {

        axios.get('https://rickandmortyapi.com/api/character', {params:{page:request.query.page}})
            .then(res => {response.json(res.data)})
            .catch(err => {
                console.log('Error: ', err.message)});

    }
    async getCharacterInfo(request, response) {
        
        axios.get('https://rickandmortyapi.com/api/character/'+request.params.id)
            .then(res => {response.json(res.data)})
            .catch(err => {
                console.log('Error: ', err.message)});

    }
}
module.exports = new CharacterController()
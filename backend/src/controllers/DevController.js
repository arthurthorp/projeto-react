const axios = require('axios');
const Dev = require('../models/Dev');
const { response } = require('express');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request,response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs , latitude, longitude } = request.body;
        
        let dev = await Dev.findOne({ github_username });

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            // await espera o retorno da API
            const { name = login, avatar_url, bio } = apiResponse.data;
            //se o name não existir, o login irá substituir
            
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude , latitude]
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }

        return response.json(dev);
    },

    async update(request, response){
        const { id } = request.params;
        //Nome, avatar, bio e localização
        
        const dev = await Dev.findById(id).exec();
        if(dev){
            const { name, avatar_url, bio, latitude, longitude } = request.body;
            if(name)
                dev.name = name;
            
            if(avatar_url)
                dev.avatar_url = avatar_url;

            if(bio)
                dev.bio = bio;

            if(latitude && longitude){
                const location = {
                    type: 'Point',
                    coordinates: [longitude , latitude]
                }
                dev.location = location;
            }
            dev.save();
        }
    
        return response.json(dev);
    },

    async destroy(request,response){
        const { id } = request.params;
        console.log(id);
        Dev.deleteOne({ _id :id }, function (err) {
            if (err) return handleError(err);
        });

        return response.json({message: "Dev removido com sucesso!"});

    }
}
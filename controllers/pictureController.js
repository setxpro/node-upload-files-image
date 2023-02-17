const Picture = require("../models/Picture")

const fs = require("fs");

module.exports.pictureController = async (req, res) => {
    try {

        const { name } = req.body;
        const file = req.file

        const picture = new Picture({
            name,
            src: file.path
        })

        await picture.save();

        await Picture.create(picture);

        res.json({ picture, message: "Imagem salva com sucess" })
        
    } catch (error) {
        res.status(500).json({status: false, message: "Erro ao salvar a imagem"})
    }
}

exports.findAll = async (req, res) => {

    try {
        const picture = await Picture.find();
        res.json(picture)
    } catch (error) {
        
    }
}

exports.remove = async (req, res) => {
    try {
        const picture = await Picture.findById(req.params.id)

        if(!picture) {
            return res.status(404).json({message: "Imagem não encontrada!"})
        }

        fs.unlinkSync(picture.src)
        await Picture.deleteOne(picture)

        res.json({message: "Deletado com sucesso!"})

    } catch (error) {
       res.status(500).json({message: "Erro ao excluir imagem."})
    }
}
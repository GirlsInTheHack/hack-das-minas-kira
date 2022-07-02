const User = require("../model/user");
const bcrypt = require("bcrypt");
const { hashPassword } = require("../helpers/hashPassword");


const create = async(req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({
            name,
            email,
            password
        });

        const passwordHashed = await hashPassword(newUser.password, res);

        newUser.password = passwordHashed;

        const save = await newUser.save();

        res.status(201).json({
            message: "Novo usuário cadastrado com sucesso!",
            save
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const login = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({email: email}).select("+password");

        if(!user) {
            return res.status(422).send({ message: "Email não encontrado!" })
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if(!checkPassword) {
            return res.status(422).send({ message: "Senha incorreta!" });
        }

        res.status(200).json({
            message: "Login feito com sucesso!"
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const update = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if(user) {
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            user.password = req.body.password || user.password

            const passwordHashed = await hashPassword(user.password, res);

            user.password = passwordHashed;

            const save = await user.save();

            res.status(200).json({
                message: "Usuário atualizado com sucesso!",
                save
            })
        }

        res.status(400).json({
            message: "Usuário não encontrado!"
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleting = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user) {
            return res.status(404).json({ message: "Usuário não encontrado." })
        }
        
        await user.delete();
        res.status(200).json({ message: "Cadastro deletado com sucesso." })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    create,
    login,
    update,
    deleting
}
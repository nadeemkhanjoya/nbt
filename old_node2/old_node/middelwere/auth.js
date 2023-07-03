import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            res.status(200).send({
                status: false,
                msg: "token is require"
            })
        } else {
            var token = req.headers.authorization
            var check = await jwt.verify(token, process.env.TOKEN_KEY)
            if (check) {
                next()
            }
        }

    } catch (error) {
        res.status(409).send({
            status: false,
            msg: "worng token"
        })
    }
}

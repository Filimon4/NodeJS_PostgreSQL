const db = require("../db.js")

class PostContoller{
    async createPost(req, res) {
        const {title, content, user_id} = req.body
        const newPost = db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, user_id])
        res.json(newPost.rows)
    }

    async getPostByUser(req, res) {
        const id = req.query.id
        const posts = await db.query(`select * from post where user_id = $1`, [id])
        res.json(posts.rows)
    }
}

module.exports = new PostContoller()

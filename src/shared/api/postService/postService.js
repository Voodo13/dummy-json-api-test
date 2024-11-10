import axios from "axios";

class PostService {
    constructor(baseUrl) {
        this.ax = axios.create({
            baseURL: `${baseUrl}/posts`
        })
    }
    async getAll(page = 1, limit = 10) {
        const skip = (page - 1) * limit
        const url = `?limit=${limit}&skip=${skip}`
        const res =  await this.ax.get(url);
        return res.data
    }
    async getFromId(id) {
        const url = `/${id}`
        const res = await this.ax.get(url);
        return res.data
    }
    async search(searchText) {
        const res = await this.ax.get(`?q=${searchText}`)
        return res.data
    }
    // Adding a new post will not add it into the server.
    // It will simulate a POST request and will return the new created post with a new id
    async create(post) {
        const res = await this.ax.post('/add', post)
        return res.data
    }
    // Updating a post will not update it into the server.
    // It will simulate a PUT/PATCH request and will return updated post with modified data
    async update(id, updatedPost) {
        const res = await this.ax.put(`/${id}`, updatedPost)
        return res.data
    }
    // Deleting a post will not delete it into the server.
    // It will simulate a DELETE request and will return deleted post with isDeleted & deletedOn keys
    async remove(id) {
        const res = await this.ax.delete(`/${id}`)
        return res.data
    }
}

export {PostService}


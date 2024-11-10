import {BASE_API_URL} from "../../config/apiConfig.js";
import {PostService} from "./postService.js";

export const postService = new PostService(BASE_API_URL)



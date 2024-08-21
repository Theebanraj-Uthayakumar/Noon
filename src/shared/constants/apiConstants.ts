import EnvironmentService from "../../service/environment.service";

export default class ApiConstants {
  static API_VERSION = {
    ONE: "/api/v1/",
    TWO: "/api/v2/",
  };

  static SERVICES = {
    POSTS: "posts",
  };

  static ENDPOINTS = {
    CREATE_POST: "create-post",
    GET_POST: "get-posts",
    UPDATE_POST: "update-post",
    DELETE_POST: "delete-post",
    ADD_FAVORITE: "add-favorite",
  };

  // POST SERVICE APIS
  static NOTES_API = `${EnvironmentService.BACKEND_API_BASE_URL()}${
    ApiConstants.API_VERSION.ONE
  }${ApiConstants.SERVICES.POSTS}/`;

  static CREATE_POST_API = `${ApiConstants.NOTES_API}${this.ENDPOINTS.CREATE_POST}`;
  static GET_POST_API = `${ApiConstants.NOTES_API}${this.ENDPOINTS.GET_POST}`;
  static UPDATE_POST_API = `${ApiConstants.NOTES_API}${this.ENDPOINTS.UPDATE_POST}`;
  static DELETE_POST_API = `${ApiConstants.NOTES_API}${this.ENDPOINTS.DELETE_POST}`;
  static ADD_FAVORITE_API = `${ApiConstants.NOTES_API}${this.ENDPOINTS.ADD_FAVORITE}`;
}

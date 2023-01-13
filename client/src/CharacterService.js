import axios from "axios";


export default class CharacterService {
  static async getAll(page = 1) {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/character",
        {
          params: {
            page: page
          }
        }
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  static async getById(id) {

      const response = await axios.get(
        "http://localhost:5000/api/character/"+ id );
      return response;
    
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.models';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  //questa costanet contiene la url del json-server
  private REST_API_SERVER = "http://localhost:3000";


  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(endpoint: string){
    return this.httpClient.get(this.REST_API_SERVER + endpoint);
  }

  public sendPostRequest(endpoint: string, ingredient: IngredientModel){
    return this.httpClient.get(this.REST_API_SERVER + endpoint);
  }

  public sendPatchRequest(endpoint: string){
    return this.httpClient.get(this.REST_API_SERVER + endpoint);
  }

  public sendDeleteRequest(endpoint: string){
    return this.httpClient.get(this.REST_API_SERVER + endpoint);
  }
}

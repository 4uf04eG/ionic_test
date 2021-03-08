import {Observable} from 'rxjs';
import {Coach} from '../models/coach';
import {QueryList} from "../models/query-list";
import {Dance} from "../models/dance";
import {Group} from "../models/group";
import {ApiResponse} from "../models/api-response";
import {Token} from "../models/token";
import {User} from "../models/user";
import {Participant} from "../models/participant";

export interface ApiInterface {
  getDances(): Observable<QueryList<Dance>>;

  getCoaches(): Observable<QueryList<Coach>>;

  getGroups(): Observable<QueryList<Group>>;

  getParticipants(): Observable<QueryList<Participant>>;

  register(user: User): Observable<ApiResponse>;

  signIn(login: string, password: string): Observable<Token>;

  signOut(): Observable<ApiResponse>;
}

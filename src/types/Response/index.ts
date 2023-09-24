import { AxiosError, AxiosResponse } from "axios";
import Board from "../Boards/Board";
import City from "../Cities/City";
import Sight from "../Sights/Sight";
import Walk from "../Walks/Walk";

export type SightsResponse = AxiosResponse<Array<Sight>>;

export type SightsError = AxiosError<Array<Sight>>;

export type WalksResponse = AxiosResponse<Array<Walk>>;

export type WalksError = AxiosResponse<Array<Walk>>;

export type CitiesResponse = AxiosResponse<Array<City>>;

export type CitiesError = AxiosResponse<Array<City>>;

export type BoardsResponse = AxiosResponse<Array<Board>>;

export type BoardsError = AxiosResponse<Array<Board>>;

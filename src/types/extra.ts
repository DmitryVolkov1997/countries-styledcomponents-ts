import {Axios} from "axios"
import * as API from '../config.ts'

export type Extra = {
    client: Axios,
    api: typeof API
}
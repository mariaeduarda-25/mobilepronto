import api from "../../api";
import { ITopico } from "../../../interfaces/Topico.interface"

class Topicodata {
    index() {
        return api.get<ITopico>('/topico')
    }
}

export default new Topicodata();
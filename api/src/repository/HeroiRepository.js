
import { con } from "./connection.js";
    export async function listarHerois() {
        const comando =`
        SELECT  id_super_heroi              id,
                nm_super_heroi              nome,
                ds_super_poder              poderes,
                bt_ voa                     podeVoar
        FROM    tb_super_heroi       
 `

    const [linhas] = await con.query(comando)
    }

    export async function inserirHeroi(heroi){
        const comando =`
            insert into tb_super_heroi (nm_super_heroi, ds_super_poder, bt_voa)
                    values (? , ? , ?)
        `

        const [resposta] = await con.query(comando, [heroi.nome, heroi.superPoder, heroi.voa]);
        heroi.id = resposta.insertId;

        return heroi
    }


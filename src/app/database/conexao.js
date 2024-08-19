import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Bmr19050531#',
    database: 'bdcopa'
})

conexao.connect()

/**
 * 
 * @param {string} sql query a ser executada
 * @param {string=id / [selecao, id]} valores valores sql
 * @param {string} mensagemReject 
 * @returns 
 */
export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if(erro) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })
}

export default conexao
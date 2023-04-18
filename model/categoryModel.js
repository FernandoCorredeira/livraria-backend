/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

/* 
DEFINIÇÃO DA ESTRUTURA DA TABELA DE CATEGORIAS 
PARAMETROS:
1 - NOME DA TABELA
2 - UM OU MAIS OBJETOS JSON QUE VÃO REPRESENTAR OS CAPOS, SEUS TIPOS E
    REGRAS DE PREENCHIMENTO
*/
const category = connection.define(
    'tbl_category',
    {
        name_category:{
            type: sequelize.STRING,
            allowNull: false
        }
    }
);

category.sync({force:true});

module.exports = category;


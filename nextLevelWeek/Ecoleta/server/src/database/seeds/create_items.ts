import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('items').insert([
        {title: 'Lampadas', image: 'lampadas.svg'},
        {title: 'Papéis e papelão', image: 'papeis-papelao.svg'},
        {title: 'Eletrônicos', image: 'eletronicos.svg'},
        {title: 'Resíduos Orgânicos', image: 'organicos.svg'},
        {title: 'Ôleo de cozinha', image: 'oleo.svg'},
        {title: 'Pilhas e baterias', image: 'baterias.svg'},
    ])
}

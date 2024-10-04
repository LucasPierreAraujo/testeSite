export function memory() {
    const produtos = [
        {
            id: 1,
            nome: 'Carne de sol',
            descricao: 'Mix de folhas, carne de sol , castanha caramelizada, tomate cereja, queijo coalho grelhado, sugerido o molho de mostarda e mel.',
            imagem: 'src/public/Carnedesol.jpeg',
            valor: 38.99
        },
        {
            id: 2,
            nome: 'Frango grelhado em lascas',
            descricao: 'Mix de folhas, lascas de frango grelhado, castanha caramelizada,gomos de tangerina, tomate cereja, rúcula, queijo parmesão, sugerido o molho de guacamole',
            imagem: 'src/public/Frangoemlascas.jpeg',
            valor: 38.99
        },
        {
            id: 3,
            nome: 'Frango desfiado',
            descricao: 'Mix de folhas, frango grelhado desfiado, castanha do pará, tomate cereja, queijo ricota, sugerido o molho de iogurte com hortelã',
            imagem: 'src/public/Frangodesfiado.jpeg',
            valor: 38.99
        },
        {
            id: 4,
            nome: 'Presunto parma',
            descricao: 'Mix de folhas, presunto parma, nozes, tomate cereja, morango, rúcula, queijo parmesão, sugerido o molho de mostarda picante',
            imagem: 'src/public/Parma.jpeg',
            valor: 39.99
        },
        // {
        //     id: 5,
        //     nome: 'Camarão grelhado',
        //     descricao: 'Mix de folhas, camarão grelhado, castanha do pará , tomate cereja, queijo ricota, sugerido o molho de ',
        //     imagem: 'src/public/SaldaCamarao.jpeg',
        //     valor: 45.99
        // },
        {
            id: 6,
            nome: 'Salada com salmão gravilax',
            descricao: 'Mix de folhas, salmão gravilax, nozes, tomate cereja, queijo parmesão, sugerido o molho pasto',
            imagem: 'src/public/salmaogravilax.jpeg',
            valor: 49.99
        }
    ];
    const proteinas = [
        {
            id: 1,
            nome: 'Carne de sol',
            descricao: '80g',
            imagem: 'src/public/Proteinacarnedesol.jpeg',
            valor: 8.00
        },
        {
            id: 2,
            nome: 'Frango desfiado',
            descricao: '80g',
            imagem: 'src/public/Proteinafrangodesfiado.jpeg',
            valor: 8.00
        },
        {
            id: 3,
            nome: 'Frango grelhado em lascas',
            descricao: '80g',
            imagem: 'src/public/Proteinafrangoemlascas.jpeg',
            valor: 8.00
        },
        {
            id: 4,
            nome: 'Presunto parma',
            descricao: '80g',
            imagem: 'src/public/Proteinapresuntoparma.jpeg',
            valor: 12.00
        },
        // {
        //     id: 5,
        //     nome: 'Camarão',
        //     descricao: '80g',
        //     imagem: 'src/public/Proteinacarnedesol.jpeg',
        //     valor: 8.00
        // },
        {
            id: 6,
            nome: 'Salmão gravilax',
            descricao: '80g',
            imagem: 'src/public/Proteinasalmao.jpeg',
            valor: 16.00
        },
    ];
    const molhos = [
        {
            id: 1,
            nome: 'Mostarda e mel',
            descricao: 'Mostarda, mel, sal e pimenta',
            imagem: 'src/public/Mostardaemel.jpeg',
            valor: 5.00
        },
        {
            id: 2,
            nome: 'Mostarda picante',
            descricao: 'Mostarda, mostarda dijon, maionese',
            imagem: 'src/public/Mostardapicante.jpeg',
            valor: 6.50
        },
        {
            id: 3,
            nome: 'Iogurte com hortelã',
            descricao: 'Iogurte natural, hortelã, azeite e sal',
            imagem: 'src/public/Iogurtehortela.jpeg',
            valor: 6.50
        },
        {
            id: 4,
            nome: 'Guacamole',
            descricao: 'Abacate, limão siciliano, cebola roxa, coentro, azeite, sal e pimenta',
            imagem: 'src/public/Guacamole.jpeg',
            valor: 7.00
        },
        // {
        //     id: 5,
        //     nome: 'Caesar',
        //     descricao: '50ml',
        //     imagem: 'src/public/Caesar.jpeg',
        //     valor: 2.50
        // },
        {
            id: 6,
            nome: 'Maracujá',
            descricao: 'Maracujá, azeite, açúcar, sal e pimenta',
            imagem: 'src/public/Molhomaracuja.jpeg',
            valor: 7.00
        },
        {
            id: 7,
            nome: 'Pesto',
            descricao: 'Azeite, manjericão, castanha de caju, parmesão, sal e pimenta',
            imagem: 'src/public/Molhopesto.jpeg',
            valor: 6.50
        }
    ];    

    const extras = [
        // {
        //     id: 1,
        //     nome: 'Morango',
        //     imagem: 'src/public/Morango.jpeg',
        //     valor: 0
        // },
        // {
        //     id: 2,
        //     nome: 'Pepino',
        //     imagem: 'src/public/Pepino.jpeg',
        //     valor: 0
        // },
        {
            id: 3,
            nome: 'Tomate cereja',
            imagem: 'src/public/Tomatecereja.jpeg',
            valor: 2.50
        },
        {
            id: 4,
            nome: 'Queijo coalho',
            imagem: 'src/public/Queijoo.jpeg',
            valor: 4.50
        },
        {
            id: 5,
            nome: 'Lascas de parmesão',
            imagem: 'src/public/Queijoo.jpeg',
            valor: 4.50
        },
        {
            id: 6,
            nome: 'Castanha de caju caramelizada',
            imagem: 'src/public/Castanhacaramelizada.jpeg',
            valor: 4.50
        },
        {
            id: 7,
            nome: 'Castanha do pará',
            imagem: 'src/public/Castanha.jpeg',
            valor: 6.00
        },
        {
            id: 8,
            nome: 'Nozes',
            imagem: 'src/public/Nozes.jpeg',
            valor: 2.50
        },
        // {
        //     id: 9,
        //     nome: 'Picles de cenoura',
        //     imagem: 'src/public/Piclescenoura.jpeg',
        //     valor: '0'
        // },
        // {
        //     id: 10,
        //     nome: 'Croutons',
        //     imagem: 'src/public/Croutons.jpeg',
        //     valor: '0'
        // },
        {
            id: 11,
            nome: 'Rúcula',
            imagem: 'src/public/Croutons.jpeg',
            valor: 3.00
        }
    ];

    const bairros = [
        {
            id: 1,
            nome: 'Centro',
            descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
            imagem: 'url_da_imagem_salada1.jpg',
            valor: '0'
        },
        {
            id: 2,
            nome: 'Bairro A',
            descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
            imagem: 'url_da_imagem_salada1.jpg',
            valor: '5,00'
        },
        {
            id: 3,
            nome: 'Bairro B',
            descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
            imagem: 'url_da_imagem_salada1.jpg',
            valor: '8,00'
        },
        {
            id: 4,
            nome: 'Bairro C',
            descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
            imagem: 'url_da_imagem_salada1.jpg',
            valor: '6,00'
        }
    ];

    const sucos = [
        {
            id: 1,
            nome: 'Laranja',
            descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
            imagem: 'src/public/Laranja.jpeg',
            valor: '9,90'
        },
        // {
        //     id: 2,
        //     nome: 'Laranja com morango',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: 'src/public/Laranjamorango.jpeg',
        //     valor: '9,90'
        // },
        // {
        //     id: 3,
        //     nome: 'Cajá',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: 'src/public/Caja.jpeg',
        //     valor: '7,90'
        // },
        // {
        //     id: 4,
        //     nome: 'Acerola',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: 'src/public/Acerola.jpeg',
        //     valor: '7,90'
        // },
        // {
        //     id: 5,
        //     nome: 'Abacaxi com hortelã',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: 'src/public/Abacaxihortela.jpeg',
        //     valor: '7,90'
        // },
        // {
        //     id: 6,
        //     nome: 'Detox (Couve, beterraba e gengibre)',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: 'url_da_imagem_salada1.jpg',
        //     valor: 0
        // },
        // {
        //     id: 7,
        //     nome: 'Maracujá',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: 'src/public/Maracuja.jpeg',
        //     valor: '9,90'
        // }
    ];

    const bebidas = [
        {
            id: 1,
            nome: 'Coca cola lata',
            descricao: '350ml',
            imagem: 'src/public/Cocacola.jpeg',
            valor: '7,90'
        },
        {
            id: 2,
            nome: 'Coca cola zero lata',
            descricao: '350ml',
            imagem: 'src/public/Cocacolazero.jpeg',
            valor: '7,90'
        },
        {
            id: 3,
            nome: 'Guaraná antartica lata',
            descricao: '350ml',
            imagem: 'src/public/Guarana.jpeg',
            valor: '7,90'
        },
        {
            id: 4,
            nome: 'Guaraná antartica zero lata',
            descricao: '350ml',
            imagem: 'src/public/Guaranazero.jpeg',
            valor: '7,90'
        },
        {
            id: 5,
            nome: 'Sprite lata',
            descricao: '350ml',
            imagem: 'src/public/Sprite.jpeg',
            valor: '7,90'
        },
        // {
        //     id: 6,
        //     nome: 'Bebida lactea com proteina',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: 'url_da_imagem_salada1.jpg',
        //     valor: 0
        // },
        {
            id: 7,
            nome: 'Água mineral sem gás',
            descricao: '500ml',
            imagem: 'src/public/Agua.jpeg',
            valor: '5,90'
        },
        {
            id: 8,
            nome: 'Água mineral com gás',
            descricao: '500ml',
            imagem: 'src/public/Aguagas.jpeg',
            valor: '5,90'
        }
    ];
    

    return {
        produtos,
        proteinas,
        molhos,
        bairros,
        sucos,
        bebidas,
        extras
    };
}

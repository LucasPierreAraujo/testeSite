export function memory() {
    const produtos = [
        {
            id: 1,
            nome: 'Carne de sol',
            descricao: 'Mix de folhas, carne de sol, castanha caramelizada, tomate cereja, queijo coalho grelhado. Sugerido o molho de mostarda e mel.',
            imagem: '/Saladacarnedesol.jpeg',
            valor: 30.00
        },
        {
            id: 2,
            nome: 'Frango grelhado em lascas',
            descricao: 'Mix de folhas, lascas de frango grelhado, castanha caramelizada, gomos de tangerina, tomate cereja, rúcula, queijo parmesão. Sugerido o molho de iogurte com hortelã.',
            imagem: '/Frangoemlascas.jpeg',
            valor: 25.00
        },
        {
            id: 3,
            nome: 'Frango desfiado',
            descricao: 'Mix de folhas, frango desfiado, castanha de cajú, tomate cereja, queijo ricota. Sugerido o molho de iogurte com hortelã.',
            imagem: '/Saladafrangodesfiado.jpeg',
            valor: 25.00
        },
        {
            id: 4,
            nome: 'Presunto parma',
            descricao: 'Mix de folhas, presunto parma, nozes, tomate cereja, morango, rúcula, queijo parmesão. Sugerido o molho de mostarda picante.',
            imagem: '/Parma.jpeg',
            valor: 30.00
        },
        {
            id: 5,
            nome: 'Camarão grelhado',
            descricao: 'Mix de folhas, camarão grelhado, castanha do pará, tomate cereja, queijo parmesão, chips de macaxeira. Sugerido o molho de maracujá.',
            imagem: '/Saladacamarao.jpeg',
            valor: 35.00
        },
        // {
        //     // id: 6,
        //     // nome: 'Salada com salmão gravilax',
        //     // descricao: 'Mix de folhas, salmão gravilax, nozes, tomate cereja, queijo parmesão. Sugerido o molho pesto.',
        //     // imagem: '/salmaogravilax.jpeg',
        //     // valor: 37.00
        // },
        {
            id: 7,
            nome: 'Salada de filé',
            descricao: 'Mix de folha, filé em cubos, tomate cereja, picles de cebola, queijo coalho ralado, castanha do para, croutons.',
            imagem: '/SaladaDFile.jpeg',
            valor: 35.00 

        },
        {
            id: 8,
            nome: 'Salada de frango grelhado em cubos',
            descricao: 'Mix de folha, frango grelhado em cubos, tomate cereja, cenoura ralada, milho verde, batata palha, ovos de codorna. ',
            imagem: '/FrangoGrelhado.jpeg',
            valor: 25.00 

        }
    ];

    const saladaMontada = {
        nome: 'Monte Sua salada!',
        descricao: 'Do seu jeito!',
        valorInicial: 50.00,
        grupoAdicional: [
            {
                grupoAdicional: 'Proteina',
                quantidadeMaxima: 1,
                quantidadeMinima: 1,
                itens: [
                    {
                        nome: 'Frango desfiado',
                        imagem: 'url',
                        valor: 3.90  
                    },
                    {
                        nome: 'Frango grelhado em lascas',
                        imagem: 'url',
                        valor: 3.90  
                    },
                    {
                        nome: 'Carne de sol',
                        imagem: 'url',
                        valor: 7.90  
                    },
                    {
                        nome: 'Presunto parma',
                        imagem: 'url',
                        valor: 9.90  
                    },
                    {
                        nome: 'Camarão grelhado',
                        imagem: 'url',
                        valor: 12.90  
                    },
                    {
                        nome: 'Salmão grelhado',
                        imagem: 'url',
                        valor: 15.90  
                    }
                ]
            },
            {
                grupoAdicional: 'Toppins',
                quantidadeMaxima: 3,
                quantidadeMinima: 2,
                itens: [
                    {
                        nome: 'Tomate cereja',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Castanha caramelizada',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Castanha do pará',
                        imagem: 'url',
                        valor: 2.00  
                    },
                    {
                        nome: 'Nozes',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Queijo parmesão em lascas',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'quejo grelhado em cubos',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Queijo ricota em cubos',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Rúcula',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Picles de cenoura',
                        imagem: 'url',
                        valor: 1.00  
                    }
                ]
            },
            {
                grupoAdicional: 'Molhos',
                quantidadeMaxima: 1,
                quantidadeMinima: 1,
                itens: [
                    {
                        nome: 'Mostarda e mel',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Mostarda picante',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    // {
                    //     nome: 'Guacamole',
                    //     imagem: 'url',
                    //     valor: 2.00  
                    // },
                    {
                        nome: 'Iogurte com hortelã',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Maracujá',
                        imagem: 'url',
                        valor: 1.00  
                    }
                ]
            },
            {
                grupoAdicional: 'Talher',
                quantidadeMaxima: 1,
                quantidadeMinima: 0,
                itens: [
                    {
                        nome: 'Sim',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Não',
                        imagem: 'url',
                        valor: 0.00  
                    }
                ]
            }
        ]
    };
    


    const proteinas = [
        {
            id: 1,
            nome: 'Carne de sol',
            descricao: '80g',
            imagem: '/Proteinacarnedesol.jpeg',
            valor: 8.00
        },
        {
            id: 2,
            nome: 'Frango desfiado',
            descricao: '80g',
            imagem: '/Proteinafrangodesfiado.jpeg',
            valor: 8.00
        },
        {
            id: 3,
            nome: 'Frango grelhado em lascas',
            descricao: '80g',
            imagem: '/Proteinafrangoemlascas.jpeg',
            valor: 8.00
        },
        {
            id: 4,
            nome: 'Presunto parma',
            descricao: '80g',
            imagem: '/Proteinapresuntoparma.jpeg',
            valor: 12.00
        },
        // {
        //     id: 5,
        //     nome: 'Camarão',
        //     descricao: '80g',
        //     imagem: '/Proteinacarnedesol.jpeg',
        //     valor: 8.00
        // },
        {
            // id: 6,
            // nome: 'Salmão gravilax',
            // descricao: '80g',
            // imagem: '/Proteinasalmao.jpeg',
            // valor: 16.00
        },
    ];
    const molhos = [
        {
            id: 1,
            nome: 'Mostarda e mel',
            descricao: 'Mostarda, mel, sal e pimenta',
            imagem: '/mostardaemel.jpeg',
            valor: 3.00
        },
        {
            id: 2,
            nome: 'Mostarda picante',
            descricao: 'Mostarda, mostarda dijon, maionese',
            imagem: '/mostardapicante.jpeg',
            valor: 3.00
        },
        {
            id: 3,
            nome: 'Iogurte com hortelã',
            descricao: 'Iogurte natural, hortelã, azeite e sal',
            imagem: '/iogurtehortela.jpeg',
            valor: 3.00
        },
        // {
        //     id: 4,
        //     nome: 'Guacamole',
        //     descricao: 'Abacate, limão siciliano, cebola roxa, coentro, azeite, sal e pimenta',
        //     imagem: '/Guacamole.jpeg',
        //     valor: 7.00
        // },
        {
            id: 5,
            nome: 'Caesar',
            descricao: 'Maionese, creme de leite, alho e queijo parmesão',
            imagem: '/Caesar.jpeg',
            valor: 2.50
        },
        {
            id: 6,
            nome: 'Maracujá',
            descricao: 'Maracujá, azeite, açúcar, sal e pimenta',
            imagem: '/molhomaracuja.jpeg',
            valor: 3.00
        },
        {
            id: 7,
            nome: 'Pesto',
            descricao: 'Azeite, manjericão, castanha de caju, parmesão, sal e pimenta',
            imagem: '/Molhopesto.jpeg',
            valor: 3.00
        }
        
    ];    

    const extras = [
        // {
        //     id: 1,
        //     nome: 'Morango',
        //     imagem: '/Morango.jpeg',
        //     valor: 0
        // },
        // {
        //     id: 2,
        //     nome: 'Pepino',
        //     imagem: '/Pepino.jpeg',
        //     valor: 0
        // },
        // {
        //     id: 3,
        //     nome: 'Tomate cereja',
        //     imagem: '/Tomatecereja.jpeg',
        //     descricao: '',
        //     valor: 2.50
        // },
        // {
        //     id: 4,
        //     nome: 'Queijo coalho',
        //     imagem: '/Queijoo.jpeg',
        //     descricao: '',
        //     valor: 4.50
        // },
        // {
        //     id: 5,
        //     nome: 'Lascas de parmesão',
        //     imagem: '/Queijoo.jpeg',
        //     descricao: '',
        //     valor: 4.50
        // },
        // {
        //     id: 6,
        //     nome: 'Castanha de caju caramelizada',
        //     imagem: '/Castanhacaramelizada.jpeg',
        //     descricao: '',
        //     valor: 4.50
        // },
        // {
        //     id: 7,
        //     nome: 'Castanha do pará',
        //     imagem: '/Castanha.jpeg',
        //     descricao: '',
        //     valor: 6.00
        // },
        // {
        //     id: 8,
        //     nome: 'Nozes',
        //     imagem: '/Nozes.jpeg',
        //     descricao: '',
        //     valor: 2.50
        // },
        // {
        //     id: 9,
        //     nome: 'Picles de cenoura',
        //     imagem: '/Piclescenoura.jpeg',
        //     valor: '0'
        // },
        // {
        //     id: 10,
        //     nome: 'Croutons',
        //     imagem: '/Croutons.jpeg',
        //     valor: '0'
        // },
        // {
        //     id: 11,
        //     nome: 'Rúcula',
        //     imagem: '/Croutons.jpeg',
        //     descricao: '',
        //     valor: 3.00
        // },
        {
            id: 12,
            nome: 'Croutons',
            imagem: '/Croutons.jpeg',
            descricao: '25g',
            valor: 3.90
        }
    ];

    const bairros = [
        {
            bairro: 'Cocó',
            frete: 0
        },
        {
            bairro: 'Engenheiro Luciano Cavalcante',
            frete: 0
        },
        {
            bairro: 'Guararapes',
            frete: 0
        },
        {
            bairro: 'Parque manibura',
            frete: 0
        },
        {
            bairro: 'Cidade dos funcionários',
            frete: 0
        },
        {
            bairro: 'Jardim das oliveiras',
            frete: 0
        },
        {
            bairro: 'Papicu',
            frete: 5.00
        },
        {
            bairro: 'Fátima',
            frete: 5.00
        },
        {
            bairro: 'Aldeota',
            frete: 5.00
        },
        {
            bairro: 'Barroso',
            frete: 6.00
        },
        {
            bairro: 'Benfica',
            frete: 7.00
        },
        {
            bairro: 'Bom futuro',
            frete: 8.00
        },
        {
            bairro: 'Dionísio torres',
            frete: 4.00
        },
        {
            bairro: 'Joaquim távora',
            frete: 5.00
        },
        {
            bairro: 'Meireles',
            frete: 7.00
        },
        {
            bairro: 'Combinar',
            frete: 0
        }
    ];

    const sucos = [
        {
            id: 1,
            nome: 'Laranja',
            descricao: '300ml, sem açúcar.',
            imagem: '/Laranja.jpeg',
            valor: 8.00
        },
        // {
        //     id: 2,
        //     nome: 'Laranja com morango',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: '/Laranjamorango.jpeg',
        //     valor: '9,90'
        // },
        // {
        //     id: 3,
        //     nome: 'Cajá',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: '/Caja.jpeg',
        //     valor: '7,90'
        // },
        // {
        //     id: 4,
        //     nome: 'Acerola',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: '/Acerola.jpeg',
        //     valor: '7,90'
        // },
        // {
        //     id: 5,
        //     nome: 'Abacaxi com hortelã',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: '/Abacaxihortela.jpeg',
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
        //     imagem: '/Maracuja.jpeg',
        //     valor: '9,90'
        // }
    ];

    const bebidas = [
        {
            id: 1,
            nome: 'Coca cola lata',
            descricao: '350ml',
            imagem: '/Cocacola.jpeg',
            valor: 6.90
        },
        {
            id: 2,
            nome: 'Coca cola zero lata',
            descricao: '350ml',
            imagem: '/Cocacolazero.jpeg',
            valor: 6.90
        },
        {
            id: 3,
            nome: 'Guaraná antartica lata',
            descricao: '350ml',
            imagem: '/Guarana.jpeg',
            valor: 6.90
        },
        {
            id: 4,
            nome: 'Guaraná antartica zero lata',
            descricao: '350ml',
            imagem: '/Guaranazero.jpeg',
            valor: 6.90
        },
        {
            id: 5,
            nome: 'Sprite lata',
            descricao: '350ml',
            imagem: '/Sprite.jpeg',
            valor: 6.90
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
            imagem: '/Agua.jpeg',
            valor: 5.00
        },
        {
            id: 8,
            nome: 'Água mineral com gás',
            descricao: '500ml',
            imagem: '/Aguagas.jpeg',
            valor: 6.00
        }
    ];
    

    return {
        produtos,
        saladaMontada,
        proteinas,
        molhos,
        bairros,
        sucos,
        bebidas,
        extras
    };
}

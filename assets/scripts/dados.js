const categorias = [
    {
        "idCategoria":1,
        "Descricao":'Gestão'
    },
    {
        "idCategoria":2,
        "Descricao":'Cliente'
    },
    {
        "idCategoria":3,
        "Descricao":'RP'
    }
];
const motivos = [
    {
        "idMotivo":1,
        "idCategoria":1,
        "Descricao":'Equipamento Permanente'
    },
    {   
        "idMotivo":2,
        "idCategoria":1,
        "Descricao":'Obras e Instalações'
    },
    {   
        "idMotivo":3,
        "idCategoria":2,
        "Descricao":'Material de Consumo'
    }
];

const produtos = [
    {
        "idProduto":1,
        "Descricao":'Teclado',
        "Quantidade":20,
        "EstoqueMinimo":12,
        "preco": 10.00,
        "Unidade":"Unid"
    },
    {
        "idProduto":2,
        "Descricao":'Mouse',
        "Quantidade":20,
        "EstoqueMinimo":12,
        "preco": 10.00,
        "Unidade":"Unid"
    },
    {
        "idProduto":3,
        "Descricao":'Monitor',
        "Quantidade":10,
        "EstoqueMinimo":6,
        "preco": 10.00,
        "Unidade":"Unid"
    },
    {
        "idProduto":4,
        "Descricao":'Gabinete',
        "Quantidade":10,
        "EstoqueMinimo":6,
        "preco": 10.00,
        "Unidade":"Unid"
    },
];
const departamentos = [
    {
        "idDep": 1,
        "Descricao":'Sec. da Educação',
        "Responsavel": 'José'
    },
    {
        "idDep": 2,
        "Descricao":'Sec. do Trabalho',
        "Responsavel": 'Joao'
    },
    {
        "idDep": 3,
        "Descricao":'Sec. da Saúde',
        "Responsavel": 'Maria'
    }
]
const funcionarios = [
    {
        "idFunc": 1,
        "Nome":'Jose',
        "Cargo":'Assistente'
       
    },
    {
        "idFunc": 2,
        "Nome":'Joao',
        "Cargo":'Zelador'
       
    },
    {
        "idFunc": 3,
        "Nome":'Maria',
        "Cargo": 'chefe é chefe ne pai'
        
    }
]
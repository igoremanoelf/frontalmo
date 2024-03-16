const categorias = [
    {
        "idCategoria": 1,
        "Descrição": "Gestão",
    },
    {
        "idCategoria": 2,
        "Descrição": "Cliente",
    },  
    {
        "idCategoria": 3,
        "Descrição": "RP",
    },
]

const motivos=[
    {
        "idMotivo": 1,
        "Descrição": "Planejamento",
        "idCategoria" : 1
    },
    {
        "idMotivo": 2,
        "Descrição": "Financeiro",
        "idCategoria" : 1
    },
    {
        "idMotivo": 3,
        "Descrição": "Quebra da Máquina",
        "idCategoria" : 2
    },
    {
        "idMotivo": 4,
        "Descrição": "Estudo de Função",
        "idCategoria" : 3
    },
]

const produtos = [
    {
        "idProduto": 1,
        "Descricao": "Computador",
        "Estoque": 5,
        "EstoqueMinimo": 5,
        "Unidade": "Un",
        "Preco": 10.00,
    },
    {
        "idProduto": 2,
        "Descricao": "Mouse",
        "Estoque": 10,
        "EstoqueMinimo": 5,
        "Unidade": "Un",
        "Preco": 15.00,
    },

    {
        "idProduto": 3,
        "Descricao": "Notebook",
        "Estoque": 4,
        "EstoqueMinimo": 5,
        "Unidade": "Un",
        "Preco": 8.00,
    },


]

const departamentos = [
    {
        "idDep": 10,
        "Descricao": "Sec. Educacao",
        "Responsavel": "Jose",
        "idFunc": 1,
        "cargo" : "Gerente"
    },
    {
        "idDep": 30,
        "Descricao": "Sec. do Trabalho",
        "Responsavel": "Luiz",
        "idFunc": 2,
        "cargo" : "Funcionario"
    },
    {
        "idDep": 40,
        "Descricao": "NAT",
        "Responsavel": "Maria",
        "idFunc": 3,
        "cargo" : "Gestor"
    },
]

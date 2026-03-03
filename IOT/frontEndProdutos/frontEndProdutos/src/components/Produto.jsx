import { useState, useEffect } from "react";
import { getProdutos } from "../services/produto";

const Produto = () => {

    const [produtos, setProdutos] = useState([])

    const carregaProduto = async () => {
        try{
            const lista = await getProdutos();
            setProdutos(lista);
        } catch (error){
            console.log("Deu erro na treta toda: ", error);
            
        }
    }

    useEffect(() => {
        carregaProduto();
    }), []

    return (
        <>
        <h1>Dourado Lanches</h1>

        <button className="btn btn-danger">Adicionar</button>
            <table>
                <thead>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Ações</th>
                </thead>
            </table>
            <tbody>

            </tbody>
        </>
    )
}

export default Produto;
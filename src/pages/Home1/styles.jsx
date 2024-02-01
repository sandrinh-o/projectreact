import styled from 'styled-components'

export const Centro = styled.header `    
    padding-top: 150px;
    font-size:20px;
    h2 {
        font-size:30px;
        text-align: left;
        color: rgb(12, 12, 12);
        position: fixed;
        top: 5%;
    }

    h3{
        font-size:20px;
        position:fixed;
        top:14%
        
    }
`

export const Container = styled.div `
    background: #0407be;
    padding: 15px;
    padding-top: 20px;
    border-radius: 10px;
    position: fixed;        
    overflow-y: scroll;
    max-height: 600px;
    h1 {
        color: #fff;
    }

    input {
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 30px; 
        outline: none;
        padding-left: 10px;
    }
`

export const AddButton = styled.button `
    background: #24a4df;
    color: #000;
    height: 45px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    margin-left: 20px;

    &:hover {
        opacity: 0.8;
    }
`

export const Produto = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:  50px;
    background: #fff;
    border-radius: 10px;
    margin-top: 15px;
    padding: 0 10px;  
    
    p {
        text-transform: capitalize;
        font-weight: bold;
    }
`
export const TrashButton = styled.button `
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
`
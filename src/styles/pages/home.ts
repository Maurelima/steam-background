import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(#092a43, #040305);

    h1 {
        font-size: 20px;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
    }
    h2 {
        font-size: 20px;
        font-weight: bolder;
        font-family: 'Inter', sans-serif;
    }
    nav a {
        font-family: 'Inter', sans-serif;
    }
    .title h1 {
        font-size: 50px;
        color: #fff;
        font-family: 'Inter', sans-serif;
    }
    .title p {
        color: ${props => props.theme.colors.text};
        font-family: 'Inter', sans-serif;
    }
    .imgSteam {
        width: 50%;
        .img {
            opacity: 0.3;
            border-radius: 200px;
            img {
                user-drag: none;
                -webkit-user-drag: none;
                user-select: none;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
            }
        }
    }

    .border-box {
        height: 60px;
        background: #051526;

        a {
            font-weight: 500;
            margin: auto;
            color: #c4c4c4;
        }
    }
`

export const Main = styled.main`
    width: 100%;
    background-color: #211c26;
    h1 {
        color: grey;
        font-size: 25px;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
    }
`

export const Button = styled.button`
    display: flex;
    width: 30%;
    height: 50px;
    margin-top: 30px;
    background: #017e94;
    color: #fff;
    border-radius: 10px;
    a {
        margin: auto;
    }
    .spinner {
        margin: auto;
        animation: spin infinite 1s linear;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    z-index: 999;
    margin-top: 30px;
    background: ${props => props.theme.colors.text};
    text-align: center;
    transition: 0.5s;
    color: #000;

    &:focus {
        outline: none;
        -webkit-box-shadow: 0px 0px 26px -9px #42a1b7;
        box-shadow: 0px 0px 26px -9px #42a1b7;
        transition: 0.5s;
    }
`

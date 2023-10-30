import { css } from "lit-element"
export default css`
*{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Oswald', sans-serif;
        }
        header{
            display: flex;
            justify-content: space-between;
            padding: 20px;
            background: #00000042;
        }
        .nav1{
            display: flex;
            justify-content: space-between;
        }
        
        .nav1 img{
            margin-left: 50px;
            width: 100px;
        }
        
        .nav1 h1{
            color: #fff;
            font-size: 40px;
            position: relative;
            top: 20%;
            left: 10%;
        }
        
        .nav2{
            display: flex;
            align-items: center;
        }
        
        .nav2 a{
            color: #fff;
            text-decoration: none;
            font-size: 20px;
            padding: 30px;
        }
        
        .nav2 a:hover{
            color: red;
            transition: .3s;
        }
        
        
        
        .container{ 
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .datos-perfil{
            display: grid;
            padding: 20px;
            margin-top:90px;
            grid-template-columns: 40% 60% ; 
            grid-gap: 25px;
            align-items: center;
            background: #00000042;
            border: 2px solid #ffffff42;;
            border-radius: 6px;
        }
        .datos-perfil{
            color: white;
        }
        .imagen{
            height: 200px;
            background-color: black;
            width: 200px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 40px 0;
            border: 2px solid white;
        }
        .imagen > img{
            width: 100%;
            border-radius: 50%;
        }
        .datos{
            padding: 40px;
            display: grid;
        }
        .datos > span{
            margin: 10px;
            font-weight: 700;
        }
        
        .mitad1{
            width: 50%;
            height: 84vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .content-mitad1{
            width: 70%;
        }
        
        .content-mitad1 > h1{
            color: #fff;
            margin-bottom: 40px;
            font-size: 50px;
            position: relative;
        }
        
        .content-mitad1 > p{
            color: #fff;
            font-size: 2.0vw;
            font-weight: 100;
            position: relative;
        }
        
        .mitad2{
            overflow: hidden;
            width: 50%;
            height: 84vh;
        }
        
        .mitad2 > img{
            width: 800px;
        }
`
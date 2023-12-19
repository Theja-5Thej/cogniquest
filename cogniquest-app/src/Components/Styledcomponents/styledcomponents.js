import styled from 'styled-components'
export const IconComponent = styled.div`
width: 45px;
height: 45px;
font-size: 25px;
display: grid;
place-items: center;
background-color: ${props=>props.bgcolor};
border-radius: 25px;
color: white;
`
export const Icon = ({children,bgcolor})=>{
 return <IconComponent bgcolor={bgcolor}>{children}</IconComponent>
}

export const Container = styled.div`
height:auto;
width: ${props=>props.width||"400px"};
display: flex;
flex-direction:column;
row-gap: 18px;
align-items: ${props=>props.align||'center'};
justify-content: ${props=>props.justify||'center'};
border: ${props=>props.border||'1.5px solid  #DAE0E2'};
border-top:none;
margin-top: 10px;
padding-bottom: 10px;
`
export const Header = styled.div`
font-weight: ${props=>props.fontweight};
text-align: start;
width: 100%;
padding-left:${props=>props.paddingLeft||"45px"};
padding-top: 5px;
margin-bottom: -5px;
margin-top: 20px;
font-family: 'Roboto', sans-serif;
font-weight: 600;
text-decoration: ${props=>props.txtdecoration};

`
export const IconContainer =styled.div`
width: 80%;
display: flex;
justify-content: space-around;

`
export const Line = styled.hr`
color: #DAE0E2;
border: 1px solid;
width: 35%;
margin-top: 10px;
height: 0px;
`
export const LineContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
`
export const FormContainer =styled.div`
display: flex;
flex-direction: column;
width: 85%;
row-gap: 10px;
align-items: center;

`
export const Input = styled.input`
padding: 12px;
width: ${props=>props.width||'95%'};
background-color:${props=>props.bgcolor};
border: 2px solid #DAE0E2;
border-radius: 5px;
color: #616C6F;
outline: none;
font-family: 'Roboto', sans-serif;
font-weight: 800;
&::placeholder{
    color: #A4B0BD;
}
`
export const Button = styled.button`
background-color: #25CCF7;
border: none;
padding: 12px;
border-radius: 5px;
font-family: 'Roboto', sans-serif;
color: white;
font-weight: 800;
margin-top: 10px;
width: ${props=>props.width||"95%"};
`
export const SubContainer = styled.div`
display: flex;
margin-top: 10px;
width: 100%;
column-gap: 25px;

`
export const MainContainer = styled.div`
width: 80%;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const InputContaner = styled.div`
width: ${props=>props.width || '100%'};
height: ${props=>props.height || '100%'};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;


`
export const Label = styled.label`
margin-left: ${props=>props.marginLeft};
width: 100%;
padding-left: 2px;
text-align: start;
font-size: ${props=>props.fontSize || "12px"};
font-weight: 800;
letter-spacing: 0.5px;
color:${props=>props.color||" #777E8B"};
font-family: 'Roboto', sans-serif;
`
export const Textarea = styled.textarea`
width: 98%;
margin-top: 2px;
height: 100px;
border: 2px solid #DAE0E2;
border-radius: 5px;
color: #616C6F;
outline: none;
padding: 10px;
font-weight: 600;
font-family: 'Roboto', sans-serif;
&::placeholder{
    color: #A4B0BD;
}
`
export const Table = styled.table`
border: 1px solid black;
`
export const Thead= styled.th`
font-size: 12px;
border: 1px solid black;
`
export const Tbody = styled.tbody`
font-size: 12px;
border: 1px solid black;
`
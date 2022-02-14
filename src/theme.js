import { createGlobalStyle } from 'styled-components'; export

    const NewStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  button{
      background: ${({ theme }) => theme.button};
      color: ${({ theme }) => theme.textButton};
      border-color:  ${({ theme }) => theme.button};
      border-radius: 10px;
  }
  .center{
      text-align: center;
      margin-top: 1%;
  }
  .div_form{
      border: 1px solid ${({ theme }) => theme.text};
      background: ${({ theme }) => theme.form};
  }
  .shadow{ 
    box-shadow: 5px 5px 15px 5px ${({ theme }) => theme.shadow};
  }
  .top-nav{
    background-color: ${({ theme }) => theme.button};
    background: linear-gradient(to left, ${({ theme }) => theme.menu1}, ${({ theme }) => theme.menu2});
    color: ${({ theme }) => theme.text};
  }
`; export const lightTheme = {
    body: '#f1f1f1',
    text: '#121620',
    button: '#000000',
    textButton: '#FFFFFF',
    form :'#DCDCDC',
    shadow: '#464646',
    menu1: '#ADD8E6',
    menu2: '#D3D3D3',
}; export const darkTheme = {
    body: '#121620',
    text: '#f1f1f1',
    button: '#FFFFFF',
    textButton: '#000000',
    form: '#1C1C1C',
    shadow: '#464646',
    menu1: '#464646',
    menu2: '#464646',
};
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  width: 80%;
  background-color: #1b1c22;
  padding: 20px;
`

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

export const MainHeading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 30px;
`

export const HomeImage = styled.img`
  height: 50%;
  margin-top: 80px;
`

export const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #25262c;
  border-radius: 10px;
  border: 2px solid #334155;
`

export const ToolList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

export const ToolItem = styled.li`
  display: flex;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  color: ${props => props.colorText};
`

export const TextArea = styled.textarea`
  height: 100%;
  background-color: #25262c;
  border: none;
  border-top: 2px solid #334155;
  width: 100%;
  outline: none;
  font-size: 20px;
  color: #f8fafc;
  padding: 20px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`

import styled from 'styled-components/macro'

export const Container = styled.section`

`

export const FormContainer = styled.form`
  display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 0px 40px 0px;
	background: #f0e4d7; ;
`

export const Label = styled.label`
  font-size: 18px;
	padding: 10px 0px;
	
`

export const Input = styled.input`
  font-size: 16px;
	border-radius: 10px;
	border: none;
	padding: 10px;
	width: 220px;
`

export const Button = styled.button`
  width: 250px;
	padding: 12px;
	background: #fff; 
	border-radius: 5px;
	border: none;
	margin-top: 20px;

	&:hover {
    background: #95D6A4;
    color: #fff;
    cursor: pointer;
    transition-duration: 0.3s;
  }
`
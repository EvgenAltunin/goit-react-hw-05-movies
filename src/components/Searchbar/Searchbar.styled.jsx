
import styled from 'styled-components'


export const Search = styled.div`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 30px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                0px 4px 5px 0px rgba(0, 0, 0, 0.14), 
                0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
export const Form = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`

export const FormSubmit = styled.button `
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 24px;
    height: 24px;
    border: 0;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover {
        opacity: 1;
    }   
`

export const Input = styled.input `
    display: inline-block;
    width: 100%;
    font: inherit;

    border: none;
    outline: none;
    padding: 0, 10px, 0, 10px;
    height: 100%;

    &::placeholder {
        font: inherit;
        font-size: 18px;
}
`
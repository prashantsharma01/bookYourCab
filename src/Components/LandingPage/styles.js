import styled from "styled-components";

export const InfoContainer = styled.div`
    margin-top: 50px ;
    margin-left: 20%;
    margin-bottom: 50px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.height > 0 ? '' : 'center'};
    justify-content: center;
    height: ${props => props.height > 0 ? 'auto' : '50vh'};
    background-color: #85b085;
    width: 112vh;
    padding:20px
`
export const InfoText = styled.p`
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px
`

export const LandingText = styled.p`
    margin-bottom: 20px;
    font-size: 29px;
    font-weight: 500;
    text-align: center
`
export const DropdownWrapper = styled.div`
    position: relative;
    width: 100%;
`
export const BookingContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Dropdown = styled.select`
    -webkit-appearance:none;
    color:grey;
    padding: 12px;
    width: 100%;
    margin-top: 12px;
`

export const Option = styled.option`
    width: max-content;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

export const UserDetailsContainer = styled.div`
    background-color: #fffbfc;
    padding: 30px;
    margin:20px;
    border-radius: 10px;
    p{
        font-weight:600;
    }
`

export const BookingDetailsContainer = styled.div`
    p {
        font-weight:400
    }
`
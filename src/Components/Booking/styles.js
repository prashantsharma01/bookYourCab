import styled from "styled-components";

export const BookingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    justify-content: center; /* Center vertically */
`
export const ImageContainer = styled.div`
    position: relative;
`

export const Image = styled.img`
    padding: 20px;
    width: 800px;

    ${props => props.successful && `
        width:300px;
        height: 300px;
    `}
`

export const CarImage = styled.img`
    width: 15px;
  position: absolute;
  transform: ${props => (props.rotate ? `rotate(${props.rotate}deg)` : 'none')};
  cursor: pointer;
`;

export const DetailsContainer = styled.div`
    width: 782px;
    background-color: #fffbfc;
    padding: 10px;
`

export const Heading = styled.p`
    // margin:10px
`

export const Text = styled.label`

`

export const TextContainer = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 10px;
`
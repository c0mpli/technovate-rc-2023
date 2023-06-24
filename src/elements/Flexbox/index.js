import styled from 'styled-components';

const desktop = '@media only screen and (min-width: 992px)';


export const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({flexRow}) => flexRow && 'row'};
  flex-direction: ${({flexCol}) => flexCol && 'column'};
  justify-content: space-between;
  justify-content: ${({justifyBtw}) => justifyBtw && 'space-between'};
  justify-content: ${({justifyAround}) => justifyAround && 'space-around'};
  justify-content: ${({justifyFlexStart}) => justifyFlexStart && 'flex-start'};
  justify-content: ${({justifyFlexEnd}) => justifyFlexEnd && 'flex-end'};
  justify-content: ${({justifyStart}) => justifyStart && 'start'};
  justify-content: ${({justifyEnd}) => justifyEnd && 'end'};
  justify-content: ${({justifyAround}) => justifyAround && 'space-around'};
  justify-content: ${({justifyCenter}) => justifyCenter && 'center'};
  align-items: center;
  align-items: ${({alignStart}) => alignStart && 'flex-start'};
  align-items: ${({alignCenter}) => alignCenter && 'center'};
  align-items: ${({alignEnd}) => alignEnd && 'flex-end'};
  ${desktop} {
    flex-direction: ${({flexRowLg}) => flexRowLg && 'row'};
    flex-direction: ${({flexColLg}) => flexColLg && 'column'};
  }
`;

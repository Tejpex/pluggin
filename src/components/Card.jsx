import styled from "styled-components"
import PropTypes from "prop-types"

export const Card = ({children, color, onClick, disabled}) => {

  return (
    <GameTypeButton $color={color} onClick={onClick} disabled={disabled}>
      {children}
    </GameTypeButton>
  )
}

const GameTypeButton = styled.button`
  background-color: var(--${({ $color }) => $color});
  color: white;
  text-shadow: 1px 1px 2px black;
  font-size: 18px;
  width: 270px;
  height: 70px;
  margin: 10px auto;
  padding: 20px 0;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  box-shadow: 4px 4px var(--${({ $color }) => `${$color}shadow`});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: 0.2s ease;

  &:hover {
    background-color: var(--${({ $color }) => `${$color}hover`});
    box-shadow: 6px 6px var(--${({ $color }) => `${$color}shadow`});
  }

  &:disabled {
    cursor: default;
    border: none;

    &:hover {
      background-color: var(--${({ $color }) => $color});
    }
  }

  @media (min-width: 700px) {
    width: 270px;
    height: 120px;
    padding: 30px 20px;
    gap: 20px;
  }
`

Card.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
}

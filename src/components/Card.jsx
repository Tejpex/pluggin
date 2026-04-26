import styled from "styled-components"
import PropTypes from "prop-types"

export const Card = ({children, color, onClick}) => {
  const maincolor = color ? `var(--${color})` : "var(--sunset)"
  const shadowcolor = color ? `var(--${color}shadow)` : "var(--sunsetshadow)"
  const hovercolor = color ? `var(--${color}hover)` : "var(--sunsethover)"


  return (
    <GameTypeButton maincolor={maincolor} shadowcolor={shadowcolor} hovercolor={hovercolor} onClick={onClick}>
      {children}
    </GameTypeButton>
  )
}

const GameTypeButton = styled.button`
  background-color: ${({ maincolor }) => maincolor};
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
  box-shadow: 4px 4px ${({ shadowcolor }) => shadowcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: 0.2s ease;

  &:hover {
    background-color: ${({ hovercolor }) => hovercolor};
    box-shadow: 6px 6px ${({ shadowcolor }) => shadowcolor};
  }

  &:disabled {
    cursor: default;
    border: none;

    &:hover {
      background-color: ${({ maincolor }) => maincolor};
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
  children: PropTypes.node,
}

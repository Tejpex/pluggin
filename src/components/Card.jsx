import styled from "styled-components"
import PropTypes from "prop-types"

export const Card = ({children, color}) => {
  const mainColor = `var(--${color})` || "var(--sunset)"
  const shadowColor = `var(--${color}shadow)` || "var(--sunsetshadow)"
  const hoverColor = `var(--${color}hover)` || "var(--sunsethover)"


  return (
    <GameTypeButton mainColor={mainColor} shadowColor={shadowColor} hoverColor={hoverColor}>
      {children}
    </GameTypeButton>
  )
}

const GameTypeButton = styled.button`
  background-color: ${({ mainColor }) => mainColor};
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
  box-shadow: 4px 4px ${({ shadowColor }) => shadowColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: 0.2s ease;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
    box-shadow: 6px 6px ${({ shadowColor }) => shadowColor};
  }

  &:disabled {
    cursor: default;
    border: none;

    &:hover {
      background-color: ${({ mainColor }) => mainColor};
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
  color: PropTypes.string,
  children: PropTypes.node,
}

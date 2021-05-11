import styled from 'styled-components'

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
`

export const Step = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ $active }) => ($active ? '13px' : '0')} 30px;
  background-color: ${({ $active, theme }) =>
    $active && theme.colors.grayLight};
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fonts.big};
  font-weight: ${({ $active }) => $active && '700'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textDark : '#A0AEC0'};

  margin: 24px 0;
  position: relative;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;

    &:after {
      display: none;
    }
  }

  &:after {
    content: '';
    position: absolute;
    height: 32px;
    border: 1px dashed ${({ theme }) => theme.colors.grayLight};
    bottom: -40px;
    left: 51px;
  }
`

export const StepLabel = styled.span`
  margin: 0 13px 0 32px;
`

export const StepInfoIcon = styled.img`
  cursor: pointer;
  margin-right: 20px;
`

export const StepActiveArrow = styled.img`
  margin-left: auto;
`

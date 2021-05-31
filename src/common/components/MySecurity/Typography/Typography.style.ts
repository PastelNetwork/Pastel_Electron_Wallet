import styled from 'styled-components'

export const Title = styled.h3.attrs({
  className: 'font-body font-extrabold leading-10	text-h3 text-text-primary',
})``

export const Description = styled.div.attrs({
  className: 'font-body font-medium leading-relaxed	text-h5 text-text-secondary',
})``

export const Hint = styled.div.attrs(props => ({
  className: `font-body font-medium leading-snug	text-h6  ${
    props?.color ? props.color : 'text-text-secondary'
  }`,
}))``

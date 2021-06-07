import React from 'react'
import Ratings from 'react-ratings-declarative'

type TStarRateProps = {
  rate: number
}

const RATING_STAR_SVG_PROPS = {
  widgetDimension: '14px',
  widgetRatedColor: '#ff9b00',
  widgetEmptyColor: 'transparent',
  svgIconViewBox: '0 0 14 14',
  svgIconPath:
    'M6.45952 1.12125C6.6777 0.66863 7.3223 0.668629 7.54048 1.12125L9.17815 4.51865C9.26561 4.70009 9.43828 4.82555 9.63787 4.85266L13.3751 5.36032C13.8729 5.42795 14.0721 6.04101 13.7091 6.38838L10.984 8.99575C10.8385 9.135 10.7726 9.33799 10.8084 9.53619L11.4805 13.2473C11.57 13.7418 11.0485 14.1206 10.606 13.8827L7.28412 12.0968C7.10672 12.0014 6.89328 12.0014 6.71588 12.0968L3.39404 13.8827C2.95148 14.1206 2.42998 13.7418 2.51951 13.2473L3.19155 9.53619C3.22744 9.33799 3.16149 9.135 3.01595 8.99575L0.290904 6.38838C-0.0721444 6.04101 0.127049 5.42795 0.624941 5.36032L4.36213 4.85266C4.56172 4.82555 4.73439 4.70009 4.82185 4.51865L6.45952 1.12125Z',
}

const StarRate = ({ rate }: TStarRateProps): JSX.Element => {
  const emptyStar = (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.45952 1.12125C6.6777 0.66863 7.3223 0.668629 7.54048 1.12125L9.17815 4.51865C9.26561 4.70009 9.43828 4.82555 9.63787 4.85266L13.3751 5.36032C13.8729 5.42795 14.0721 6.04101 13.7091 6.38838L10.984 8.99575C10.8385 9.135 10.7726 9.33799 10.8084 9.53619L11.4805 13.2473C11.57 13.7418 11.0485 14.1206 10.606 13.8827L7.28412 12.0968C7.10672 12.0014 6.89328 12.0014 6.71588 12.0968L3.39404 13.8827C2.95148 14.1206 2.42998 13.7418 2.51951 13.2473L3.19155 9.53619C3.22744 9.33799 3.16149 9.135 3.01595 8.99575L0.290904 6.38838C-0.0721444 6.04101 0.127049 5.42795 0.624941 5.36032L4.36213 4.85266C4.56172 4.82555 4.73439 4.70009 4.82185 4.51865L6.45952 1.12125Z'
        fill='white'
      />
      <path
        d='M6.90992 1.33836C6.94628 1.26292 7.05372 1.26293 7.09008 1.33836L8.72775 4.73576C8.88809 5.06841 9.20466 5.2984 9.57057 5.34811L13.3078 5.85577C13.3907 5.86704 13.4239 5.96922 13.3634 6.02711L10.6384 8.63448C10.3716 8.88977 10.2506 9.26191 10.3165 9.62528L10.9885 13.3364C11.0034 13.4188 10.9165 13.482 10.8427 13.4423L7.52089 11.6564C7.19565 11.4815 6.80436 11.4815 6.47911 11.6564L3.15727 13.4423C3.0835 13.482 2.99659 13.4188 3.01151 13.3364L3.68355 9.62528C3.74935 9.26191 3.62844 8.88978 3.36162 8.63448L0.636571 6.02711C0.576061 5.96922 0.609263 5.86704 0.692243 5.85577L4.42943 5.34811C4.79534 5.2984 5.1119 5.06841 5.27225 4.73576L6.90992 1.33836Z'
        stroke='#8E98A3'
        strokeOpacity='0.28'
      />
    </svg>
  )
  return (
    <div className='relative pb-2px'>
      <div className='absolute'>
        <Ratings svgs={emptyStar} widgetSpacings='1.5px'>
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
      </div>
      <Ratings rating={rate} widgetSpacings='1.5px'>
        <Ratings.Widget {...RATING_STAR_SVG_PROPS} />
        <Ratings.Widget {...RATING_STAR_SVG_PROPS} />
        <Ratings.Widget {...RATING_STAR_SVG_PROPS} />
        <Ratings.Widget {...RATING_STAR_SVG_PROPS} />
        <Ratings.Widget {...RATING_STAR_SVG_PROPS} />
      </Ratings>
    </div>
  )
}

export default StarRate

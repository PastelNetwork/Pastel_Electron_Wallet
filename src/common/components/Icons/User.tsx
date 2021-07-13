import React from 'react'

export type TUserProps = {
  width?: number
  height?: number
  className?: string
}

export const User: React.FC<TUserProps> = ({
  width = 14,
  height = 14,
  className = 'text-gray-4a',
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.5139 8.76064C10.9403 9.16201 11.2801 9.63791 11.5142 10.1618C11.7451 10.6766 11.868 11.2218 11.8804 11.7823C11.8811 11.8076 11.8709 11.8321 11.8522 11.8502C11.8335 11.8683 11.8079 11.8785 11.7811 11.8785H11.0364C10.9818 11.8785 10.9383 11.8386 10.9371 11.787C10.9123 10.8818 10.5275 10.034 9.84737 9.39147C9.14364 8.72663 8.20905 8.3608 7.21365 8.3608C6.21824 8.3608 5.28365 8.72663 4.57992 9.39147C3.89976 10.034 3.51501 10.8818 3.49018 11.787C3.48894 11.8374 3.4455 11.8785 3.39089 11.8785H2.6462C2.61943 11.8785 2.59379 11.8683 2.5751 11.8502C2.5564 11.8321 2.54624 11.8076 2.54691 11.7823C2.5583 11.2254 2.68259 10.6757 2.91305 10.163C3.14763 9.63932 3.48734 9.16349 3.91342 8.76181C4.34161 8.35611 4.84056 8.03834 5.3966 7.81673C5.39908 7.81556 5.40156 7.81468 5.40404 7.8138C5.40653 7.81292 5.40901 7.81204 5.41149 7.81087C4.63825 7.28205 4.13558 6.42256 4.13558 5.45286C4.13558 3.84646 5.51326 2.54492 7.21365 2.54492C8.91403 2.54492 10.2917 3.84646 10.2917 5.45286C10.2917 6.42256 9.78904 7.28205 9.0158 7.8097C9.01828 7.81087 9.02077 7.81175 9.02325 7.81263C9.02573 7.81351 9.02821 7.81439 9.03069 7.81556C9.58503 8.03718 10.0887 8.35811 10.5139 8.76064ZM5.70163 6.89642C6.10579 7.2768 6.64301 7.48631 7.21381 7.48631C7.78461 7.48631 8.32183 7.2768 8.72599 6.89642C9.13015 6.51603 9.35275 6.01041 9.35275 5.47319C9.35275 4.93597 9.13015 4.43035 8.72599 4.04996C8.32183 3.66958 7.78461 3.46007 7.21381 3.46007C6.64301 3.46007 6.10579 3.66958 5.70163 4.04996C5.29747 4.43035 5.07487 4.93597 5.07487 5.47319C5.07487 6.01041 5.29747 6.51603 5.70163 6.89642Z'
        fill='currentColor'
      />
    </svg>
  )
}

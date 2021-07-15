import React from 'react'

export type TForumProps = {
  width?: number
  height?: number
  className?: string
}

export const Forum: React.FC<TForumProps> = ({
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
        d='M1.96172 0.560547C1.50125 0.560547 1.12172 0.940078 1.12172 1.40055V1.71336L0.113281 2.52055L1.12172 3.32664V3.64055C1.12172 4.10102 1.50125 4.48055 1.96172 4.48055H10.3617C10.8222 4.48055 11.2017 4.10102 11.2017 3.64055V1.40055C11.2017 0.940078 10.8222 0.560547 10.3617 0.560547H1.96172ZM1.96172 1.12055H10.3617C10.5203 1.12055 10.6417 1.24195 10.6417 1.40055V3.64055C10.6417 3.79914 10.5203 3.92055 10.3617 3.92055H1.96172C1.80312 3.92055 1.68172 3.79914 1.68172 3.64055V3.05867L1.01016 2.52055L1.68172 1.98242V1.40055C1.68172 1.24195 1.80312 1.12055 1.96172 1.12055ZM3.08172 2.24055C2.9275 2.24055 2.80172 2.36633 2.80172 2.52055C2.80172 2.67477 2.9275 2.80055 3.08172 2.80055C3.23594 2.80055 3.36172 2.67477 3.36172 2.52055C3.36172 2.36633 3.23594 2.24055 3.08172 2.24055ZM4.20172 2.24055C4.0475 2.24055 3.92172 2.36633 3.92172 2.52055C3.92172 2.67477 4.0475 2.80055 4.20172 2.80055C4.35594 2.80055 4.48172 2.67477 4.48172 2.52055C4.48172 2.36633 4.35594 2.24055 4.20172 2.24055ZM5.32172 2.24055C5.1675 2.24055 5.04172 2.36633 5.04172 2.52055C5.04172 2.67477 5.1675 2.80055 5.32172 2.80055C5.47594 2.80055 5.60172 2.67477 5.60172 2.52055C5.60172 2.36633 5.47594 2.24055 5.32172 2.24055ZM6.44172 2.24055C6.2875 2.24055 6.16172 2.36633 6.16172 2.52055C6.16172 2.67477 6.2875 2.80055 6.44172 2.80055C6.59594 2.80055 6.72172 2.67477 6.72172 2.52055C6.72172 2.36633 6.59594 2.24055 6.44172 2.24055ZM7.56172 2.24055C7.4075 2.24055 7.28172 2.36633 7.28172 2.52055C7.28172 2.67477 7.4075 2.80055 7.56172 2.80055C7.71594 2.80055 7.84172 2.67477 7.84172 2.52055C7.84172 2.36633 7.71594 2.24055 7.56172 2.24055ZM3.08172 5.04055C2.62125 5.04055 2.24172 5.42008 2.24172 5.88055V6.19445L1.23328 7.00055L2.24172 7.80664V8.12055C2.24172 8.58101 2.62125 8.96055 3.08172 8.96055H11.4817C11.9422 8.96055 12.3217 8.58101 12.3217 8.12055V5.88055C12.3217 5.42008 11.9422 5.04055 11.4817 5.04055H3.08172ZM3.08172 5.60055H11.4817C11.6403 5.60055 11.7617 5.72195 11.7617 5.88055V8.12055C11.7617 8.27914 11.6403 8.40055 11.4817 8.40055H3.08172C2.92312 8.40055 2.80172 8.27914 2.80172 8.12055V7.53867L2.13016 7.00055L2.80172 6.46242V5.88055C2.80172 5.72195 2.92312 5.60055 3.08172 5.60055ZM4.20172 6.72055C4.0475 6.72055 3.92172 6.84633 3.92172 7.00055C3.92172 7.15476 4.0475 7.28055 4.20172 7.28055C4.35594 7.28055 4.48172 7.15476 4.48172 7.00055C4.48172 6.84633 4.35594 6.72055 4.20172 6.72055ZM5.32172 6.72055C5.1675 6.72055 5.04172 6.84633 5.04172 7.00055C5.04172 7.15476 5.1675 7.28055 5.32172 7.28055C5.47594 7.28055 5.60172 7.15476 5.60172 7.00055C5.60172 6.84633 5.47594 6.72055 5.32172 6.72055ZM6.44172 6.72055C6.2875 6.72055 6.16172 6.84633 6.16172 7.00055C6.16172 7.15476 6.2875 7.28055 6.44172 7.28055C6.59594 7.28055 6.72172 7.15476 6.72172 7.00055C6.72172 6.84633 6.59594 6.72055 6.44172 6.72055ZM4.20172 9.52055C3.74125 9.52055 3.36172 9.90008 3.36172 10.3605V10.6745L2.35328 11.4805L3.36172 12.2866V12.6005C3.36172 13.061 3.74125 13.4405 4.20172 13.4405H12.6017C13.0622 13.4405 13.4417 13.061 13.4417 12.6005V10.3605C13.4417 9.90008 13.0622 9.52055 12.6017 9.52055H4.20172ZM4.20172 10.0805H12.6017C12.7603 10.0805 12.8817 10.202 12.8817 10.3605V12.6005C12.8817 12.7591 12.7603 12.8805 12.6017 12.8805H4.20172C4.04312 12.8805 3.92172 12.7591 3.92172 12.6005V12.0187L3.25016 11.4805L3.92172 10.9424V10.3605C3.92172 10.202 4.04312 10.0805 4.20172 10.0805ZM5.32172 11.2005C5.1675 11.2005 5.04172 11.3263 5.04172 11.4805C5.04172 11.6348 5.1675 11.7605 5.32172 11.7605C5.47594 11.7605 5.60172 11.6348 5.60172 11.4805C5.60172 11.3263 5.47594 11.2005 5.32172 11.2005ZM6.44172 11.2005C6.2875 11.2005 6.16172 11.3263 6.16172 11.4805C6.16172 11.6348 6.2875 11.7605 6.44172 11.7605C6.59594 11.7605 6.72172 11.6348 6.72172 11.4805C6.72172 11.3263 6.59594 11.2005 6.44172 11.2005ZM7.56172 11.2005C7.4075 11.2005 7.28172 11.3263 7.28172 11.4805C7.28172 11.6348 7.4075 11.7605 7.56172 11.7605C7.71594 11.7605 7.84172 11.6348 7.84172 11.4805C7.84172 11.3263 7.71594 11.2005 7.56172 11.2005ZM8.68172 11.2005C8.5275 11.2005 8.40172 11.3263 8.40172 11.4805C8.40172 11.6348 8.5275 11.7605 8.68172 11.7605C8.83594 11.7605 8.96172 11.6348 8.96172 11.4805C8.96172 11.3263 8.83594 11.2005 8.68172 11.2005ZM9.80172 11.2005C9.6475 11.2005 9.52172 11.3263 9.52172 11.4805C9.52172 11.6348 9.6475 11.7605 9.80172 11.7605C9.95594 11.7605 10.0817 11.6348 10.0817 11.4805C10.0817 11.3263 9.95594 11.2005 9.80172 11.2005ZM10.9217 11.2005C10.7675 11.2005 10.6417 11.3263 10.6417 11.4805C10.6417 11.6348 10.7675 11.7605 10.9217 11.7605C11.0759 11.7605 11.2017 11.6348 11.2017 11.4805C11.2017 11.3263 11.0759 11.2005 10.9217 11.2005Z'
        fill='currentColor'
      />
    </svg>
  )
}
import { TPeriod } from '../utils/PastelStatisticsLib'

export type TThemeColor = {
  name: string
  backgroundColor: string
  lineColor?: string
  splitLineColor: string
  color: string
  stack?: string
  smooth?: boolean
}

export type TLineChartProps = {
  chartName: string
  dataX?: string[]
  dataY?: number[]
  dataY1?: number[]
  dataY2?: number[]
  title?: string
  info: {
    [key: string]: string | number
  }
  offset: number
  periods: TPeriod[]
  handleBgColorChange: (color: string) => void
  handlePeriodFilterChange?: (period: TPeriod) => void
}

export type TThemeInitOption = {
  theme?: TThemeColor | null
  dataX?: string[]
  dataY?: number[]
  dataY1?: number[]
  dataY2?: number[]
  chartName: string
  minY: number
  maxY: number
}

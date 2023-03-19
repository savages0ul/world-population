import { ReactEChartsProps } from '../components/ReactECharts/ReactECharts';
import { DataOption } from '../types/dataOption';

export function getCurrentOption(
  title: string,
  dataOption: DataOption[],
  visualMap: number[]
): ReactEChartsProps['option'] {
  return {
    backgroundColor: '#2c343c',
    title: {
      text: title,
      left: 'center',
      top: 0,
      textStyle: {
        color: '#ccc',
        fontFamily: 'Roboto',
        fontWeight: 400,
      },
    },
    tooltip: {
      trigger: 'item',
    },
    visualMap: {
      show: false,
      min: visualMap[0],
      max: visualMap[1],
      inRange: {
        color: ['#c23531', '#C96C66'],
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '65%',
        center: ['50%', '50%'],
        data: dataOption,
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)',
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: '#c23531',
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        animationDelay: function (idx) {
          return Math.random() * 200;
        },
      },
    ],
  };
}

import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('screen').width - 75 - 60;

const Chart = ({ inStock = 0, outOfStock = 0 }) => {
  const data = [
    {
      name: 'Out of Stock',
      population: outOfStock,
      color: colors.color1_light,
      legendFontColor: colors.color2,
    },
    {
      name: 'In Stock',
      population: inStock,
      color: colors.color1_light2,
      legendFontColor: colors.color2,
    },
  ];

  const chartConfig = {
    color: (opacity) => `rgba(26,255,146,${opacity})`,
  };

  return (
    <View>
      <PieChart
        data={data}
        width={screenWidth}
        height={155}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'#FFFFFF'}
        absolute
      />
    </View>
  );
};

export default Chart;

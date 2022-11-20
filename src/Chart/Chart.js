import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const Chart = () => {
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.42222, 0.63333, 0.8333],
  };

  const LineChar = [
    {value: 0.42222, value1: 0.555, value2: 100, value3: 2200, value4: 20033},
    {v1: 310, v2: 140, v3: 150, v4: 160, v5: 170, v6: 1100},
  ];

  console.log(Object.values(LineChar[0]));

  const LineChartData = [1, 2, 3, 4, 5, 6, 7, 8];

  const StackedBarChartData = {
    labels: ['Test1', 'Test2'],
    legend: ['L1', 'L2', 'L3'],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
  };

  const PieChartData = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const commitsData = [
    {date: '2017-01-02', count: 1},
    {date: '2017-01-03', count: 2},
    {date: '2017-01-04', count: 3},
    {date: '2017-01-05', count: 4},
    {date: '2017-01-06', count: 5},
    {date: '2017-01-30', count: 2},
    {date: '2017-01-31', count: 3},
    {date: '2017-03-01', count: 2},
    {date: '2017-04-02', count: 4},
    {date: '2017-03-05', count: 2},
    {date: '2017-02-30', count: 4},
  ];

  return (
    <ScrollView
      style={{
        flexGrow: 1,
      }}>
      <View
        style={{
          flex: 1.2,
        }}>
        <Text>Bezier Line Chart</Text>

        {/* Bezier Line Chart */}
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: Object.values(LineChar[0]),
              },
              {
                data: Object.values(LineChar[1]),
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              },
            ],
          }}
          width={Dimensions.get('window').width}
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          // yAxisInterval={5}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 0,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

        {/* ProgressChart */}
        <ProgressChart
          data={data}
          width={screenWidth}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />

        {/* LineChart */}

        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: Object.values(LineChar[0]),
              },
              {
                data: Object.values(LineChar[1]),
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              },
            ],
            legend: ['Rainy Days'],
          }}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />

        {/* BarChart */}

        <BarChart
          // style={graphStyle}
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: Object.values(LineChar[0]),
              },
              {
                data: Object.values(LineChar[1]),
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              },
            ],
            legend: ['Rainy Days'],
          }}
          width={screenWidth}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />

        {/* StackedBarChart */}

        <StackedBarChart
          // style={graphStyle}
          data={StackedBarChartData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />

        {/* PieChart */}

        <PieChart
          data={PieChartData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          center={[10, 50]}
          absolute
        />

        {/* ContributionGraph */}
        <ContributionGraph
          values={commitsData}
          endDate={new Date('2017-04-01')}
          numDays={105}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
      <View
        style={{
          height: 10,
        }}></View>
    </ScrollView>
  );
};

export default Chart;

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { View } from "react-native";

export default function TestChart(props) {
  return (
    <View>
      <LineChart
        data={{
          labels: [
            "Rome",
            "Bucharest",
            "Timisoara",
            "Belgrade",
            "Elblag",
            "Stuttgart",
          ],
          datasets: [
            {
              data: [3, 6, 7.5, 2, 3.7, 8.5],
            },
          ],
        }}
        width={420} // from react-native
        height={220}
        yAxisLabel="P: "
        yAxisInterval={10} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          paddingLeft: 4,
        }}
      />
    </View>
  );
}

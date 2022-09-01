import { View, Dimensions } from "react-native"
import GridLayout from "@ogzhnaydn/react-native-grid-layout"

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <GridLayout
        numCols={3}
        numRows={3}
        bodyStyle={{ backgroundColor: "#1e232a", flex: 1 }}
      >
        <View
          colStart={1}
          colEnd={2}
          rowStart={1}
          rowEnd={1}
          style={{ backgroundColor: "red", flex: 1 }}
        ></View>
        <View
          colStart={3}
          colEnd={3}
          rowStart={1}
          rowEnd={1}
          style={{ backgroundColor: "blue", flex: 1 }}
        ></View>
        <View
          colStart={1}
          colEnd={2}
          rowStart={2}
          rowEnd={3}
          style={{ backgroundColor: "black", flex: 1 }}
        ></View>
        <View
          colStart={3}
          colEnd={3}
          rowStart={2}
          rowEnd={3}
          style={{ backgroundColor: "white", flex: 1 }}
        ></View>
      </GridLayout>
    </View>
  )
}

import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FastToast from 'react-native-fast-toast';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    FastToast.multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

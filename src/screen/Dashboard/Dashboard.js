import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';

const Dashboard = () => {
  const [showVideo, setShowVideo] = useState(true);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <OrientationLocker
        orientation={LANDSCAPE}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation =>
          console.log('onDeviceChange', orientation)
        }
      />
      {/* <Button title="Toggle Video" onPress={() => setShowVideo(!showVideo)} /> */}
      {showVideo && (
        <View>
          {/* <OrientationLocker orientation={LANDSCAPE} /> */}
          <View style={{width: 320, height: 180, backgroundColor: '#ccc'}}>
            <Text>Landscape video goes here</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Dashboard;

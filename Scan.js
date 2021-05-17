import * as React from 'react';
import react from 'react'
import{Text,View,Image, TouchableOpacity} from 'react-native'
export default class Book extends React.Component{
  constructor(){
    super();
    this.state={
      hasCameraPermissions:null,
      scanned:false,
      scannedData:'',
      buttonState: 'normal'
    }
  }

  render(){  
    return(
<View>
  <TouchableOpacity onPress={this.getCameraPermissions}
  style={styles.scanButton}
  title="Bar Code Scanner">
<Text></Text>
</TouchableOpacity>
</View>
    )

}}
const styles = StyleSheet.create({
  scanButton: {
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
import * as React from 'react';
import { useState } from 'react';
import { Image, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function OldApp() {
  const [selectedImage, setSelectedImage] = useState({
    localUri: "https://i.imgur.com/TkIrScD.png",
    isDefault: true,
  });

  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Sharing isn't available on your platform`);
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  };

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({
      localUri: pickerResult.uri,
      isDefault: false,
    });
    console.log(selectedImage);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedImage.localUri }} style={styles.logo}/>

      <Text style={styles.instructions}>
        To share a phto from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity
        onPress={selectedImage.isDefault ? openImagePickerAsync : openShareDialogAsync}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {selectedImage.isDefault ? 'Pick a photo' : 'Share this photo'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

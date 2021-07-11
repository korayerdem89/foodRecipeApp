import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 10,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius:50,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    height: 90,
    overflow: 'hidden',
  },
  imageView: {
    borderRadius: 50,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    minWidth: 110,
    backgroundColor: 'red',
    minHeight: '90%',
    resizeMode: 'contain',
    overflow: 'hidden',
    backgroundColor: '#eceff1',
  },
  text: {
    fontSize: 20,
    marginLeft: 15,
  },
});

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  textInputContainer: { paddingVertical: 10 },
  textInput: {
    color: 'black',
    fontSize: 14,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  label: {
    color: 'bbb',
    paddingBottom: 12,
    fontWeight: 600,
  },
  onFocusTextInput: {
    borderColor: 'orange',
    borderWidth: 2,
  },
  onFocusLabel: {
    color: 'orange',
  },
});

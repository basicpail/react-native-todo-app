import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Pressable } from 'react-native'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';
// import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const InputForm = () => {
  const [currentValue, setCurrentValue] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if(currentValue !== '') {
      dispatch(addTodo(currentValue));
      setCurrentValue('');
    }
  }
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.addFormContainer}
    >
      <TextInput //어떻게 코어컴포넌트인 TextInput이 cannot find 에러가 나오냐
        style={styles.inputField}
        placeholder="할 일을 작성해주세요."
        value={currentValue}
        onChangeText={setCurrentValue}
        onSubmitEditing={handleSubmit} //버튼 클릭외에 엔터키를 누를 때 여기가 트리거 된다.
      />
      <Pressable 
        style={styles.addButton}
        onPress={handleSubmit}
      >
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default InputForm

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f7f8fa'
  },
  inputField: {
    flex: 1,
    height: 42,
    padding: 5,
    marginRight: 25,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    color: '#000000',
    fontSize: 15,
    textAlignVertical: 'center'
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
  addButtonText: {
    color: 'white',
    fontSize: 25
  }
})
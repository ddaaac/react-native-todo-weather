import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  headerTitle: {
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 15,
    color: 'grey',
    fontSize: 30,
    fontWeight: '800',
  },
  todoInput: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: "#FFF",
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoInputEdit: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19
  },
  todoList: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  todoBody: {
    maxHeight: Math.round(Dimensions.get('window').height) - 280,
  },
  todoItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
    minHeight: 60,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  },
  todoButton: {
    flex: 1,
    alignItems: 'center',
  },
  todoContent: {
    flex: 5,
  },
  todoDone: {
    color: 'rgba(215,215,215,0.5)',
    textDecorationLine: 'line-through',
  },
  fullFlex: {
    flex: 1,
  },
  todoFooter: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: "#FFF",
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  filterItem: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 1,
    color: 'grey',
  },
  filterSelected: {
    borderWidth: 0.5,
    borderColor: 'red',
  },
  todoCounter: {
    color: 'grey',
  },
});
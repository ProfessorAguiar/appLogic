import { StyleSheet, Text, View, Modal, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function from() {
  const [r, setR] = useState(false);

  const [openA, setOpenA] = useState(false);
  const [valueA, setValueA] = useState(null);
  const [itemsA, setItemsA] = useState([
    { label: '0', value: 0 },
    { label: '1', value: 1 }
  ]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'NOT', value: 'NOT' },
    { label: 'AND', value: 'AND' },
    { label: 'OR', value: 'OR' },
    { label: 'XOR', value: 'XOR' },
    { label: 'NAND', value: 'NAND' },
    { label: 'NOR', value: 'NOR' },
    { label: 'XNOR', value: 'XNOR' },
  ]);
  const [openB, setOpenB] = useState(false);
  const [valueB, setValueB] = useState(null);
  const [itemsB, setItemsB] = useState([
    { label: '0', value: 0 },
    { label: '1', value: 1 }
  ]);

  
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.vprinc}>
      <View style={styles.row}>
        <View>
          <DropDownPicker
            open={openA}
            value={valueA}
            placeholder="A"
            items={itemsA}
            setOpen={setOpenA}
            setValue={setValueA}
            setItems={setItemsA}
            style={styles.portas}
          />
        </View>
        <View>
          <DropDownPicker
            open={open}
            value={value}
            placeholder="Portas"
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={styles.portas}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            dropDownDirection ="TOP"

          />
        </View>
        <View>
          <DropDownPicker
            open={openB}
            value={valueB}
            placeholder="B"
            items={itemsB}
            setOpen={setOpenB}
            setValue={setValueB}
            setItems={setItemsB}
            style={styles.portas}
          />
        </View>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalTextT}>Saída:</Text>
              <Text style={styles.modalText}>{r}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            setModalVisible(true)
            if (value == 'NOT') {
              setR(Number(!valueA))
            }else if(value=='AND'){
              setR(Number(valueA && valueB))
            }else if(value=='OR'){
              setR(Number(valueA || valueB))
            }else if(value=='XOR'){
              setR(Number((valueA&&!valueB)||((!valueA&&valueB))))
            }else if(value=='NAND'){
              setR(Number(!(valueA && valueB)))
            }else if(value=='NOR'){
              setR(Number(!(valueA||valueB)))
            }else if(value=='XNOR'){
              setR(Number(!((valueA&&!valueB)||((!valueA&&valueB)))))
            }
          }}>
          <Text style={styles.textStyle}>Calcular</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    margin: 20,
  },
  bt: {
    flex: 1,
    width: '80%',
    justifyContent: 'flex-end',
  },
  vprinc: {
    height: 350,
    alignItems: 'center'
  },
  portas: {
    width: 100,
    zIndex:999,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 13,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 55,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    padding: 13,
    elevation: 2,
    marginTop:150,
    marginLeft:'auto',
    marginLeft:'auto',
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:40,
    fontWeight:'bold',
  },
})

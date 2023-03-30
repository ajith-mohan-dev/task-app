/**
 * Use Case One
 */

import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../themes';
import {
  Table,
  Row,
  Rows,
  Cell,
  TableWrapper,
} from 'react-native-table-component';
import ToastMsg from '../../components/ToastMsg';
import styles from './styles';
import {LOCAL_STRING} from '../../config/local-string';

type IInputState = {
  tabelName: string;
  uniqueName: string;
  columnName: string;
};

const UseCaseOneScreen: React.FC = () => {
  //state
  const [inputState, setInputState] = useState<IInputState>({
    tabelName: '',
    uniqueName: '',
    columnName: '',
  });

  const [tabelState, setTabelState] = useState({
    tableHead: ['Table Name', 'Unique Name', 'Column Name', 'User Input'],
    tableData: [],
  });

  const {tabelName, uniqueName, columnName} = inputState;
  const {tableHead, tableData} = tabelState;

  const manualUpdateHandler = () => {
    if (tabelName.length === 0) {
      ToastMsg('Please enter table name');
    } else if (uniqueName.length === 0) {
      ToastMsg('Please enter unique name');
    } else if (columnName.length === 0) {
      ToastMsg('Please enter column name');
    } else {
      let tempArr: any = [...tableData];
      const newArr = [tabelName, uniqueName, columnName, ''];
      tempArr.push(newArr);
      setTabelState(prevState => ({
        ...prevState,
        tableData: tempArr,
      }));
      setInputState({
        tabelName: '',
        uniqueName: '',
        columnName: '',
      });
    }
  };

  const element = (data: any, cellIndex: number, index: number) => {
    return (
      <View style={styles.inputView}>
        <TextInput
          value={data}
          placeholder={'_'}
          onChangeText={val => {
            let tempdata: any = [...tableData];
            tempdata[index][cellIndex] = val;
            setTabelState(prevState => ({
              ...prevState,
              tableData: tempdata,
            }));
          }}
          style={styles.textInputStyles}
        />
      </View>
    );
  };

  const onUpdatePress = () => {
    setTabelState(prevState => ({
      ...prevState,
      tableData: tableData,
    }));
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ScrollView style={{flex: 1}}>
            <View
              style={{
                margin: 20,
              }}>
              <View style={styles.inputContainer}>
                <TextInput
                  value={tabelName}
                  onChangeText={val =>
                    setInputState(prevState => ({
                      ...prevState,
                      tabelName: val,
                    }))
                  }
                  placeholder={'Table Name'}
                  style={styles.inputText}
                />
              </View>
              <View style={[styles.inputContainer, {marginVertical: 15}]}>
                <TextInput
                  value={uniqueName}
                  onChangeText={val =>
                    setInputState(prevState => ({
                      ...prevState,
                      uniqueName: val,
                    }))
                  }
                  placeholder={'Unique Name'}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  value={columnName}
                  onChangeText={val =>
                    setInputState(prevState => ({
                      ...prevState,
                      columnName: val,
                    }))
                  }
                  placeholder={'Column Name'}
                  style={styles.inputText}
                />
              </View>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={manualUpdateHandler}>
                <Text style={styles.buttonText}>
                  {LOCAL_STRING.ManualUpadte}
                </Text>
              </TouchableOpacity>
            </View>
            <KeyboardAvoidingView style={{flex: 1}}>
              {tableData.length > 0 && (
                <>
                  <View style={{marginHorizontal: 20}}>
                    <Table
                      borderStyle={{
                        borderWidth: 1,
                        borderColor: colors.BLACK_WITH_OPACIT,
                      }}>
                      <Row
                        data={tableHead}
                        style={styles.head}
                        textStyle={styles.text}
                      />
                      {tableData.map((rowData, index) => (
                        <TableWrapper key={index} style={styles.row}>
                          {Array.isArray(rowData) &&
                            rowData.map((cellData: any, cellIndex: any) => (
                              <Cell
                                key={cellIndex}
                                data={
                                  cellIndex === 3
                                    ? element(cellData, cellIndex, index)
                                    : cellData
                                }
                                textStyle={styles.tableRowText}
                              />
                            ))}
                        </TableWrapper>
                      ))}
                    </Table>
                  </View>

                  <View
                    style={{
                      marginHorizontal: 20,
                    }}>
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={onUpdatePress}>
                      <Text style={styles.buttonText}>
                        {LOCAL_STRING.Update}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default UseCaseOneScreen;

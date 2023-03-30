/**
 * Use Case Two
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

type IInputState = {
  webSiteUrl: string;
};

const UseCaseTwoScreen: React.FC = () => {
  //state
  const [inputState, setInputState] = useState<IInputState>({
    webSiteUrl: '',
  });

  const [tabelState, setTabelState] = useState({
    tableHead: ['Website', 'Status'],
    tableData: [],
  });

  const {webSiteUrl} = inputState;
  const {tableHead, tableData} = tabelState;

  const manualUpdateHandler = () => {
    if (webSiteUrl.length === 0) {
      ToastMsg('Please enter website url');
    } else {
      let tempArr: any = [...tableData];
      const newArr = [webSiteUrl, ''];
      tempArr.push(newArr);
      setTabelState(prevState => ({
        ...prevState,
        tableData: tempArr,
      }));
      setInputState({
        webSiteUrl: '',
      });
    }
  };

  const element = (data: any, cellIndex: number, index: number) => {
    return (
      <View style={styles.statusButton}>
        <Text style={styles.statusButtonText}>Success</Text>
      </View>
    );
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
                  value={webSiteUrl}
                  onChangeText={val =>
                    setInputState(prevState => ({
                      ...prevState,
                      webSiteUrl: val,
                    }))
                  }
                  placeholder={'Enter website here to be monitored'}
                  style={styles.inputText}
                />
              </View>

              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={manualUpdateHandler}>
                <Text style={styles.buttonText}>Add</Text>
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
                                  cellIndex === 1
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
                </>
              )}
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default UseCaseTwoScreen;

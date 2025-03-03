import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import * as z from 'zod';
import {login} from '../api/auth';
import {AuthCredentials} from '../types/auth';
import {zodResolver} from '@hookform/resolvers/zod';

const logo = require('../assets/dinarLogo.png');

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const LoginScreen = ({navigation}: {navigation: any}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AuthCredentials>({
    resolver: zodResolver(loginSchema),
  });

  const onLogin = async (data: AuthCredentials) => {
    try {
      await login(data);
      navigation.navigate('List');
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex1}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled">
          <Image source={logo} style={styles.logo} />

          <Text style={styles.title}>Welcome</Text>

          <Controller
            control={control}
            name="email"
            render={({field: {value, onChange}}) => (
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={value}
                  onChangeText={onChange}
                />
                {errors.email && (
                  <Text style={styles.error}>{errors.email.message}</Text>
                )}
              </View>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({field: {value, onChange}}) => (
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                />
                {errors.password && (
                  <Text style={styles.error}>{errors.password.message}</Text>
                )}
              </View>
            )}
          />

          <TouchableOpacity style={styles.btn} onPress={handleSubmit(onLogin)}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
    gap: 12,
    justifyContent: 'center',
  },
  logo: {
    marginTop: 46,
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {fontSize: 30, fontWeight: 'bold', marginBottom: 10, color: '#2D3847'},
  input: {
    borderWidth: 1,
    borderColor: '#EEF1F5',
    padding: 10,
    color: '#4C596C',
    borderRadius: 12,
  },
  error: {color: 'red', fontSize: 12, marginTop: 8},
  btn: {
    backgroundColor: '#013496',
    alignItems: 'center',
    padding: 18,
    borderRadius: 50,
    marginTop: 50,
  },
  btnText: {color: 'white', fontSize: 17},
  flex1: {flex: 1},
});

export default LoginScreen;

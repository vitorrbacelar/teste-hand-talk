import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel/TextInputWithLabel';
import { Controller, useForm } from 'react-hook-form';

export default function Login() {
  const {
    control,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({ defaultValues: { user: '', password: '' } });

  const onSubmit = async () => {
    handleSubmit(({ user, password }) => {
      console.log(user, password);
    })();
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, margin: 30 }}>
        <View>
          <Text>Hand Talk</Text>
          <View>
            <Controller
              name="user"
              control={control}
              render={({ field: { onBlur, onChange, ref, value } }) => (
                <TextInputWithLabel
                  ref={ref}
                  label="Login:"
                  placeholder="usuário123"
                  onChangeText={text => setValue('user', text)}
                  onChange={onChange}
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                  accessibilityLabel="Digite seu nome de usuário"
                  accessibilityHint="Campo para digitar seu usuário"
                  accessibilityRole="keyboardkey"
                  onEndEditing={() => setFocus('password')}
                  onBlur={onBlur}
                  errorMsg={errors?.user?.message}
                  value={value}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field: { onBlur, onChange, ref, value } }) => (
                <TextInputWithLabel
                  ref={ref}
                  label="Senha:"
                  placeholder="*******"
                  onChangeText={text => setValue('password', text)}
                  onChange={onChange}
                  returnKeyType="go"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  accessibilityLabel="Digite sua senha"
                  accessibilityHint="Campo para digitar sua senha"
                  secureTextEntry
                  onBlur={onBlur}
                  errorMsg={errors?.password?.message}
                  value={value}
                />
              )}
            />
          </View>
          <View>
            <Button title="Entrar" onPress={onSubmit} />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

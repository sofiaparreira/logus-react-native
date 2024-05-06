import { VStack, Image, Text, Heading, Box, FormControl, Input, Button, Link } from "native-base"
import { TouchableOpacity } from "react-native";
import { TEMAS } from '../../styles/temas';
import Logo from '../../assets/logo.jpg'
import { Title } from "../../components/Title";
import { InputDefault } from "../../components/InputDefault";

export default function SingUp1() {
    return (
        <VStack flex={1} alignItems='center' p={5} fontSize='md' >
            <Heading style={{ marginTop: 72, marginBottom: 48 }}>Cadastre-se</Heading>
            <Image
                style={{ width: 240, height: 100, marginBottom: 48 }}
                source={Logo} alt='Logo do Lógus da tela de Cadastro'
            />
        

            <Box style={{ marginTop: 24, marginBottom: 8 }}>
                <FormControl>
                    <FormControl.Label>E-mail</FormControl.Label>
                    <InputDefault/>

                    <FormControl.Label>Senha</FormControl.Label>
                    <InputDefault/>

                    <FormControl.Label>Confirmar senha</FormControl.Label>
                    <InputDefault/>
m,
                </FormControl>
            </Box>
            <Button
                backgroundColor='purple.500'
                w='100%'
                borderRadius='lg'
                marginBottom={4}
                marginTop={16}
            >
                Cadastrar
            </Button>

            <Box style={{ flex: 1, flexDirection: 'row' }}>
                <Text>Já tenho cadastro? </Text>
                <TouchableOpacity>
                    <Text color='purple.300' >Login</Text>
                </TouchableOpacity>
            </Box>

        </VStack>
    )
}

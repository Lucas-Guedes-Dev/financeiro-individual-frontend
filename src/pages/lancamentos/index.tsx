import React from "react";
import Box from '@mui/material/Box';
import { Container, StyledTextField, DatePickerStyled, Button, Linha } from './style';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
        value: 'Crédito',
        label: 'Crédito',
    },
    {
        value: 'Débito',
        label: 'Débito',
    },
    {
        value: 'Pix',
        label: 'Pix',
    },
    {
        value: 'Dinheiro',
        label: 'Dinheiro',
    },

];

const categorias = [
    {
        value: 'Restaurante',
        label: 'Restaurante',
    },
    {
        value: 'Compras',
        label: 'Compras',
    },
    {
        value: 'Laser',
        label: 'Laser',
    },
    {
        value: 'Imposto',
        label: 'Imposto',
    },
    {
        value: 'Supermercado',
        label: 'Supermercado',
    },
    {
        value: 'Investimentos',
        label: 'Investimentos',
    },


];
const FormLancamentos: React.FC = () => {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >

            < Container>
                <Linha>
                    <StyledTextField
                        id="filled-textarea"
                        label="Título"
                        placeholder="Escreva"
                        multiline
                        variant="filled"
                    />

                    <StyledTextField
                        id="filled-textarea"
                        label="Valor"
                        placeholder="Escreva"
                        multiline
                        variant="filled"
                    />

                    <StyledTextField
                        id="filled-textarea"
                        label="Descrição"
                        placeholder="Escreva"
                        multiline
                        variant="filled"
                    />
                </Linha>
                <Linha>
                    <StyledTextField
                        id="opcoes-monetarias"
                        select
                        label="Selecione"
                        defaultValue="Compras"
                        helperText=""
                        variant="filled"
                    >
                        {categorias.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </StyledTextField>


                    <StyledTextField
                        id="opcoes-monetarias"
                        select
                        label="Selecione"
                        defaultValue="Dinheiro"
                        helperText=""
                        variant="filled"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </StyledTextField>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePickerStyled />
                    </LocalizationProvider>
                </Linha>
                <Linha style={{
                    justifyContent: "flex-end",
                    alignItems: "flex-end"
                }}>
                    <Button>Cancelar</Button>
                    <Button style={{
                        background: "blue",
                        color: "white"
                    }}>Salvar</Button>
                </Linha>

            </Container>

        </Box>

    )
};

export default FormLancamentos;
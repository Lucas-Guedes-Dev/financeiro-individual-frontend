import React, { useEffect, useState } from "react";
import { Collumn, Container, IconButton, Row, TableWrapper } from "./style";
import { FaPlus } from "react-icons/fa";
import { ButtonGreen, FieldLabel, FieldRow, FieldWrapper, PanelActions, PanelForm, SlidePanel, TextInput } from "../caixas-bancos/style";
import { Title } from "../../components/navbar/style";
import { formatRealValue } from "../../util";
import BankAcoount from "../../services/bank-account";
import { toast } from "react-toastify";
import type { BankAccountResponse } from "../../services/bank-account/types";

const BankAccountScreen: React.FC = () => {
    const service = new BankAcoount();

    const [showLaunch, setShowLaunch] = useState(false);
    const [name, setName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [value, setValue] = useState("0");
    const [accountList, setAccountList] = useState<BankAccountResponse[]>([]);

    const sendNewAccount = async () => {
        const create = await service.create({
            bank_name: name,
            account_number: accountNumber,
            balance: Number(value)
        })

        setShowLaunch(true);

        if (create) {
            toast.success('Conta bancária criada com sucesso')
            setShowLaunch(false)
            return
        }

        toast.error('Erro ao criar a conta bancária')
        return
    }

    const getAllAccount = async () => {
        const response: BankAccountResponse[] = await service.getAll();

        setAccountList(response)
    }

    useEffect(() => {
        getAllAccount();
    }, [])

    return (
        <Container>
            <Row>
                <Collumn>
                    <Title>
                        Conta Bancária
                    </Title>
                </Collumn>
                <Collumn style={{ justifyContent: "flex-end" }}>
                    <IconButton onClick={() => setShowLaunch(true)}>
                        Nova Conta
                        <FaPlus size={15} color="white" />
                    </IconButton>
                </Collumn>
            </Row>
            <TableWrapper>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Conta</th>
                            <th>Valor da conta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accountList.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{row.bank_name}</td>
                                <td>{row.account_number}</td>
                                <td>{formatRealValue(`${row.balance}`)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableWrapper>

            <SlidePanel open={showLaunch}>
                <button onClick={() => setShowLaunch(false)}>Fechar</button>
                <h3>Cadastro de Conta Bancaria</h3>
                <PanelForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        sendNewAccount();
                    }}
                >
                    <FieldRow>
                        <FieldWrapper>
                            <FieldLabel>Nome</FieldLabel>
                            <TextInput
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FieldWrapper>
                        <FieldWrapper>
                            <FieldLabel>Número da conta</FieldLabel>
                            <TextInput
                                type="text"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                            />
                        </FieldWrapper>
                        <FieldWrapper>
                            <FieldLabel>Valor da conta</FieldLabel>
                            <TextInput
                                type="text"
                                value={formatRealValue(value)}
                                disabled
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </FieldWrapper>
                    </FieldRow>

                    <PanelActions>
                        <button type="button" onClick={() => setShowLaunch(false)}>
                            Cancelar
                        </button>
                        <ButtonGreen type="submit">Salvar</ButtonGreen>
                    </PanelActions>
                </PanelForm>
            </SlidePanel>
        </Container>
    )
}

export default BankAccountScreen;
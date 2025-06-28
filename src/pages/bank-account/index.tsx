import React, { useState } from "react";
import { Collumn, Container, IconButton, Row, TableWrapper } from "./style";
import { FaPlus } from "react-icons/fa";
import { ButtonGreen, FieldLabel, FieldRow, FieldWrapper, PanelActions, PanelForm, SelectInput, SlidePanel, TextArea, TextInput } from "../caixas-bancos/style";

const BankAccount: React.FC = () => {
    const [showLaunch, setShowLaunch] = useState(false);
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");
    const [type, setType] = useState("entrada");
    const [competencia, setCompetencia] = useState("");
    const [account, setAccount] = useState("");
    const [historico, setHistorico] = useState("");

    const filteredRows = [{
        id: 1,
        data: "01/06/2025",
        historico: "Ref. ao pedido de venda nº 12345 | Método de pagamento: PIX",
        cliente: "Fulano LTDA",
        conta: "02 - Mercado Livre (Ebazarr)",
        valor: "V 100,00",
        type: "entrada" as const,
    }, {
        id: 1,
        data: "01/06/2025",
        historico: "Ref. ao pedido de venda nº 12345 | Método de pagamento: PIX",
        cliente: "Fulano LTDA",
        conta: "02 - Mercado Livre (Ebazarr)",
        valor: "V 100,00",
        type: "saida" as const,
    },];
    return (
        <Container>
            <Row>
                <Collumn>
                    ola
                </Collumn>
                <Collumn style={{ justifyContent: "flex-end" }}>
                    <IconButton onClick={() => setShowLaunch(true)}>
                        Novo
                        <FaPlus size={15} color="white" />
                    </IconButton>
                </Collumn>
            </Row>
            <TableWrapper>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Data</th>
                            <th>Categoria</th>
                            <th>Histórico</th>
                            <th>Cliente/Fornecedor</th>
                            <th>Conta</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRows.map((row) => (
                            <tr key={row.id}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{row.data}</td>
                                <td></td>
                                <td>{row.historico}</td>
                                <td>{row.cliente}</td>
                                <td>{row.conta}</td>
                                <td
                                    style={{ color: row.type === "entrada" ? "green" : "red" }}
                                >
                                    {row.valor}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableWrapper>

            <SlidePanel open={showLaunch}>
                <button onClick={() => setShowLaunch(false)}>Fechar</button>
                <h3>Lançamento de caixa</h3>
                <PanelForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log({
                            category,
                            date,
                            value,
                            type,
                            competencia,
                            account,
                            historico,
                        });
                    }}
                >
                    <FieldWrapper style={{ width: "380px" }}>
                        <FieldLabel>Categoria</FieldLabel>
                        <SelectInput
                            style={{ height: "30px" }}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="" disabled>
                                Selecione a categoria
                            </option>
                            <option value="venda">Venda</option>
                            <option value="servico">Serviço</option>
                            <option value="salario">Salário</option>
                            <option value="impostos">Impostos</option>
                            <option value="outros">Outros</option>
                        </SelectInput>
                    </FieldWrapper>
                    <FieldRow>
                        <FieldWrapper>
                            <FieldLabel>Data</FieldLabel>
                            <TextInput
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </FieldWrapper>
                        <FieldWrapper>
                            <FieldLabel>Valor R$</FieldLabel>
                            <TextInput
                                type="number"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </FieldWrapper>
                        <FieldWrapper>
                            <FieldLabel>Tipo</FieldLabel>
                            <SelectInput
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="entrada">Entrada</option>
                                <option value="saida">Saída</option>
                            </SelectInput>
                        </FieldWrapper>
                    </FieldRow>
                    <FieldRow>
                        <FieldWrapper>
                            <FieldLabel>Competência</FieldLabel>
                            <TextInput
                                type="date"
                                value={competencia}
                                onChange={(e) => setCompetencia(e.target.value)}
                            />
                        </FieldWrapper>
                        <FieldWrapper>
                            <FieldLabel>Conta</FieldLabel>
                            <SelectInput
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                            >
                                <option value="" disabled>
                                    Conta
                                </option>
                                <option value="1">Conta 1</option>
                                <option value="2">Conta 2</option>
                            </SelectInput>
                        </FieldWrapper>
                    </FieldRow>
                    <FieldWrapper style={{ width: "360px" }}>
                        <FieldLabel>Histórico</FieldLabel>
                        <TextArea
                            rows={9}
                            style={{ width: "360px" }}
                            value={historico}
                            onChange={(e) => setHistorico(e.target.value)}
                        />
                    </FieldWrapper>
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

export default BankAccount;
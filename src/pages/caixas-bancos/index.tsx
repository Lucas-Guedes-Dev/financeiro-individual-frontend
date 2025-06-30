import React, { useEffect, useState } from "react";
import { FaPrint, FaFileExport, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Container,
  SearchInput,
  Tabs,
  Tab,
  TableWrapper,
  IconButton,
  SidePanel,
  ToggleButton,
  ButtonGreen,
  Summary,
  SummaryItem,
  SlidePanel,
  PanelForm,
  FieldRow,
  FieldWrapper,
  FieldLabel,
  TextInput,
  SelectInput,
  TextArea,
  PanelActions,
  TabContainer,
} from "./style";
import BankAcoount from "../../services/bank-account";
import type { BankAccountResponse } from "../../services/bank-account/types";
import Transactions from "../../services/transactions";
import { toast } from "react-toastify";
import type { TransactionResponse } from "../../services/transactions/types";

const TransactionsScreen: React.FC = () => {
  const bankService = new BankAcoount();
  const service = new Transactions();

  const [tab, setTab] = useState<string>("movimentacoes");
  const [showLaunch, setShowLaunch] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("entrada");
  const [account, setAccount] = useState("");
  const [description, setDesciption] = useState("");
  const [bankAccountList, setBankAccountList] = useState<BankAccountResponse[]>([])

  const [rows, setRows] = useState<TransactionResponse[]>([]);

  const filteredRows = rows.filter((r) => {
    if (tab === "entradas") return r.type === "entrada";
    if (tab === "saidas") return r.type === "saida";
    return true;
  });

  const getAllBankAccounts = async () => {
    const response = await bankService.getAll();

    setBankAccountList(response)
  }

  const createTransaction = async () => {
    const response = await service.create({
      type: type,
      amount: Number(value),
      category: category,
      description: description,
      date: date,
      bank_account_id: account
    })

    if (response) {
      toast.success('Transação criada com sucesso.')
      setShowLaunch(false);
      return;
    }

    toast.error('Falha ao criar a transação.')
    setShowLaunch(false);
    return;
  }

  const getAll = async () => {
    const response = await service.getAll();

    setRows(response);
  }

  useEffect(() => {
    getAllBankAccounts()
    getAll()
  }, [])

  return (
    <Container>
      <div style={{ flex: 1 }}>

        <SearchInput placeholder="Pesquise por nome ou histórico" />
        <Tabs>
          <TabContainer>
            <Tab
              onClick={() => setTab("movimentacoes")}
              data-active={tab === "movimentacoes"}
            >
              Movimentações
            </Tab>
            <Tab
              onClick={() => setTab("entradas")}
              data-active={tab === "entradas"}
            >
              Entradas
            </Tab>
            <Tab onClick={() => setTab("saidas")} data-active={tab === "saidas"}>
              Saídas
            </Tab>
          </TabContainer>

          <TabContainer style={{ justifyContent: 'flex-end' }}>
            <IconButton title="Imprimir saldos">
              <FaPrint />
            </IconButton>
            <IconButton title="Exportar extrato">
              <FaFileExport />
            </IconButton>
            <IconButton title="Incluir lançamento" onClick={() => setShowLaunch(true)}>
              <FaPlus />
            </IconButton>
          </TabContainer>

        </Tabs>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Data</th>
                <th>Tipo</th>
                <th>Categoria</th>
                <th>Descrição</th>
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
                  <td>{row.date}</td>
                  <td>{row.type}</td>
                  <td>{row.category}</td>
                  <td>{row.description}</td>
                  <td>{row.bank_account_id}</td>
                  <td
                    style={{ color: row.type === "entrada" ? "green" : "red" }}
                  >
                    {row.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrapper>
      </div>
      {showInfo ? (
        <SidePanel>
          <ToggleButton onClick={() => setShowInfo(false)}>
            <FaChevronRight />
          </ToggleButton>
          <Summary>
            <SummaryItem>
              Quantidade de registros:
              <strong>4</strong>
            </SummaryItem>
            <SummaryItem>
              Saldo atual da conta:
              <strong>R$ 100,00</strong>
            </SummaryItem>
            <SummaryItem style={{ color: "green" }}>
              Entradas:
              <strong>R$ 180,00</strong>
            </SummaryItem>
            <SummaryItem style={{ color: "red" }}>
              Saídas:
              <strong>R$ 80,00</strong>
            </SummaryItem>
            <div style={{ marginTop: "10px" }}>
              <strong>Saldos</strong>
            </div>
            <div>Conta 1 - R$ 70,00</div>
            <div>Conta 2 - R$ 30,00</div>
          </Summary>
        </SidePanel>
      ) : (
        <ToggleButton collapsed onClick={() => setShowInfo(true)}>
          <FaChevronLeft />
        </ToggleButton>
      )}
      <SlidePanel open={showLaunch}>
        <button onClick={() => setShowLaunch(false)}>Fechar</button>
        <h3>Lançamento de caixa</h3>
        <PanelForm
          onSubmit={(e) => {
            e.preventDefault();
            createTransaction();
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
              <FieldLabel>Conta</FieldLabel>
              <SelectInput
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              >
                <option value="" disabled>
                  Conta
                </option>
                {bankAccountList.map((value, index) => (
                  <option value={value.id} key={index}>{value.bank_name}</option>
                ))}
              </SelectInput>
            </FieldWrapper>
          </FieldRow>
          <FieldWrapper style={{ width: "360px" }}>
            <FieldLabel>Descrição</FieldLabel>
            <TextArea
              rows={9}
              style={{ width: "360px" }}
              value={description}
              onChange={(e) => setDesciption(e.target.value)}
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
  );
};

export default TransactionsScreen;

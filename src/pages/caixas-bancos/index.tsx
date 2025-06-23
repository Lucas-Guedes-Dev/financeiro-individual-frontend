import React, { useState } from "react";
import { FaPrint, FaFileExport, FaPlus, FaExchangeAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Container,
  Breadcrumb,
  Header,
  Selector,
  SearchInput,
  Tabs,
  Tab,
  TableWrapper,
  Actions,
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
  BalanceInfo,
  Arrow,
} from "./style";

const CaixasEBancos: React.FC = () => {
  const [tab, setTab] = useState<string>("movimentacoes");
  const [showLaunch, setShowLaunch] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("entrada");
  const [competencia, setCompetencia] = useState("");
  const [account, setAccount] = useState("");
  const [historico, setHistorico] = useState("");
  const [originAccount, setOriginAccount] = useState("");
  const [destinationAccount, setDestinationAccount] = useState("");
  const [transferValue, setTransferValue] = useState("");
  const [transferDate, setTransferDate] = useState("");

  const accountsOptions = [
    { id: "1", name: "Conta 1", balance: 70 },
    { id: "2", name: "Conta 2", balance: 30 },
  ];

  const getBalance = (id: string) => {
    const acc = accountsOptions.find((a) => a.id === id);
    return acc ? acc.balance.toFixed(2) : "0.00";
  };

  const rows = [
    {
      id: 1,
      data: "01/06/2025",
      historico: "Ref. ao pedido de venda nº 12345 | Método de pagamento: PIX",
      cliente: "Fulano LTDA",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "V 100,00",
      type: "entrada" as const,
    },
    {
      id: 2,
      data: "02/06/2025",
      historico: "Pagamento recebido via transferência",
      cliente: "Beltrano ME",
      conta: "01 - Conta Corrente",
      valor: "V 80,00",
      type: "entrada" as const,
    },
    {
      id: 3,
      data: "03/06/2025",
      historico: "Pagamento de boleto",
      cliente: "Fornecedor X",
      conta: "01 - Conta Corrente",
      valor: "R$ 50,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
    {
      id: 4,
      data: "04/06/2025",
      historico: "Compra de materiais",
      cliente: "Fornecedor Y",
      conta: "02 - Mercado Livre (Ebazarr)",
      valor: "R$ 30,00",
      type: "saida" as const,
    },
  ];

  const filteredRows = rows.filter((r) => {
    if (tab === "entradas") return r.type === "entrada";
    if (tab === "saidas") return r.type === "saida";
    return true;
  });

  return (
    <Container>
      <div style={{ flex: 1 }}>
        <Header>
          <Breadcrumb>... &gt; Lançamentos</Breadcrumb>
          <Selector defaultValue="all">
            <option value="all">Todas contas ⏷</option>
            <option value="1">Conta 1</option>
            <option value="2">Conta 2</option>
          </Selector>
        </Header>
        <Actions>
          <IconButton title="Imprimir saldos">
            <FaPrint />
          </IconButton>
          <IconButton title="Exportar extrato">
            <FaFileExport />
          </IconButton>
          <IconButton title="Incluir lançamento" onClick={() => setShowLaunch(true)}>
            <FaPlus />
          </IconButton>
          <IconButton
            title="Transferência entre contas"
            onClick={() => setShowTransfer(true)}
          >
            <FaExchangeAlt />
          </IconButton>
        </Actions>
        <SearchInput placeholder="Pesquise por nome ou histórico" />
        <Tabs>
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
        </Tabs>
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
      <SlidePanel open={showTransfer}>
        <button onClick={() => setShowTransfer(false)}>Fechar</button>
        <h3>Transferência entre contas</h3>
        <PanelForm
          onSubmit={(e) => {
            e.preventDefault();
            console.log({
              originAccount,
              destinationAccount,
              transferValue,
              transferDate,
            });
          }}
        >
          <span>Insira as informações da transferência</span>
          <FieldRow>
            <FieldWrapper style={{ width: "240px" }}>
              <FieldLabel>Conta origem</FieldLabel>
              <SelectInput
                style={{ height: "40px" }}
                value={originAccount}
                onChange={(e) => setOriginAccount(e.target.value)}
              >
                <option value="" disabled>
                  Conta
                </option>
                {accountsOptions.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name}
                  </option>
                ))}
              </SelectInput>
              <BalanceInfo>Saldo: R$ {getBalance(originAccount)}</BalanceInfo>
            </FieldWrapper>
            <Arrow>→</Arrow>
            <FieldWrapper style={{ width: "240px" }}>
              <FieldLabel>Conta destino</FieldLabel>
              <SelectInput
                style={{ height: "40px" }}
                value={destinationAccount}
                onChange={(e) => setDestinationAccount(e.target.value)}
              >
                <option value="" disabled>
                  Conta
                </option>
                {accountsOptions.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name}
                  </option>
                ))}
              </SelectInput>
              <BalanceInfo>
                Saldo: R$ {getBalance(destinationAccount)}
              </BalanceInfo>
            </FieldWrapper>
          </FieldRow>
          <FieldRow>
            <FieldWrapper style={{ width: "240px" }}>
              <FieldLabel>Valor R$</FieldLabel>
              <TextInput
                style={{ height: "40px" }}
                type="number"
                value={transferValue}
                onChange={(e) => setTransferValue(e.target.value)}
              />
            </FieldWrapper>
            <FieldWrapper style={{ width: "240px" }}>
              <FieldLabel>Data da transferência</FieldLabel>
              <TextInput
                style={{ height: "40px" }}
                type="date"
                value={transferDate}
                onChange={(e) => setTransferDate(e.target.value)}
              />
            </FieldWrapper>
          </FieldRow>
          <PanelActions>
            <button type="button" onClick={() => setShowTransfer(false)}>
              Cancelar
            </button>
            <ButtonGreen type="submit">Salvar</ButtonGreen>
          </PanelActions>
        </PanelForm>
      </SlidePanel>
    </Container>
  );
};

export default CaixasEBancos;

import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCards {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  userCanAddTransaction?: boolean;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  expensesTotal,
  investmentsTotal,
  userCanAddTransaction,
}: SummaryCards) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <SummaryCard
          icon={<WalletIcon size={16} />}
          title="Saldo"
          amount={balance}
          size="large"
          userCanAddTransaction={userCanAddTransaction}
        />
        <SummaryCard
          icon={<PiggyBankIcon size={18} />}
          title="Investido"
          amount={investmentsTotal}
        />
        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
          amount={depositsTotal}
        />
        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-danger" />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;

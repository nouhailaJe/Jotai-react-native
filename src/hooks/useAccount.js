import { useAtom } from "jotai";
import { accountListState } from "../atoms/account";

export const useAccount = () => {
  const [accountList, setAccountList] = useAtom(accountListState);

  function addAccount({ id, name, balance, initial_balance, note, opening_date }) {
    setAccountList((accountList) => [
      ...accountList,
      {
        id,
        name,
        balance,
        initial_balance,
        note,
        opening_date,
        transactions: [],
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  }

  return { accountList, setAccountList, addAccount };
}
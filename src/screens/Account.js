import { useEffect,useState } from "react";
import { useAccount } from "../hooks/useAccount"
import { Text, Button,View } from 'react-native';



function Account() {
    const [refersh, setRefresh] = useState(true)
    const { setAccountList, accountList } = useAccount()
    // const { loading, data } = useQuery(QUERY_ALL_ACCOUNTS);

    useEffect(() => {
        // Testing filling station with data that comes from the backend
        const fill = async () => {
            // clear state from any data
            await setAccountList([])

            // Generating 1M records
            const data = []
            for (let i = 0; i < 1000000; i++) {
                data.push({
                    id: i,
                    balance: i,
                    name: `account ${i}`
                })
            }

            // Snapshot date befor the inserting data
            const dateBefor = new Date();
            // inserting data
            await setAccountList(data)

            // Snapshot after befor the inserting data
            const dateAfter = new Date();

            console.log(dateBefor)

            const diffInSecends = (dateAfter - dateBefor) / 1000
            const diffInMin = diffInSecends / 60
            const diffInHours = diffInMin / 60

            console.log("In seconds", diffInSecends)
            console.log("In Minutes", diffInMin)
            console.log("In Hours", diffInHours)

            console.log(dateAfter)
            setRefresh(false)
        }

        fill()
    }, [refersh])

    return (
        <View>
            <Text>
                {accountList.length}
            </Text>
            <Button
                onPress={() => setRefresh(true)}
                title="Refresh"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default Account;
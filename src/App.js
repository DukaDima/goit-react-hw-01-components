import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import StatisticsSection from './components/Statistics/StatisticsSection';
import StatisticsList from './components/Statistics/StatisticsList';
import statisticalData from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendList/FrendList';
import friends from './components/FriendList/friends.json';

import transactions from './components/TransactionHistory/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <StatisticsSection title="Upload stats">
        <StatisticsList stats={statisticalData} />
      </StatisticsSection>

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
}
